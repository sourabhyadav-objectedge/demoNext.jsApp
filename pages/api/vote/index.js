const fs=require('fs');

export default async function handler(req,res)
{
    if(!fs.existsSync("/tmp/poll.json"))
    {
        if(!fs.existsSync("/tmp"))
            await fs.mkdir("/tmp",()=>{});
        fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}");
        
    }
    const poll=JSON.parse(fs.readFileSync("/tmp/poll.json",'utf-8'));
    poll.votes.push({name:req.body.name,genre:req.body.genre});
    fs.writeFileSync("/tmp/poll.json",JSON.stringify(poll),'utf-8');
    res.status(200).end('<h1>Successfully performed the request</h1>');
    
}