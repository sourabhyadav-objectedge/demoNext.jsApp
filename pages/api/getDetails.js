const fs=require('fs');

export default async function handler(req,res)
{
    try
    {
        if(!fs.existsSync("/tmp/poll.json"))
        {
            if(!fs.existsSync("/tmp"))
                await fs.mkdir("/tmp",()=>{});
            fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}");
        }
    }
    catch(err)
    {
        res.status(500).json({length:0,rap:0});
    }
    const poll=JSON.parse(fs.readFileSync("/tmp/poll.json",'utf-8'));
    res.status(200).json({length:poll.votes.length,rap:poll.votes.reduce((freq,vote)=>freq+(vote.genre=='rap'),0)});
    
}