const fs=require('fs');

export default function handler(req,res)
{
    const poll=JSON.parse(fs.readFileSync(__dirname+"/../../../../data/poll.json",'utf-8'));
    poll.votes.push({name:req.body.name,genre:req.body.genre});
    fs.writeFileSync(__dirname+"/../../../../data/poll.json",'utf-8',JSON.stringify(poll));
    res.status(200).end('<h1>Successfully performed the request</h1>');
    
}