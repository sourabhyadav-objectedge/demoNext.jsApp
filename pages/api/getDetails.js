const fs=require('fs');

export default function handler(req,res)
{
    if(!fs.existsSync("/tmp/poll.json"))
    {
        fs.mkdir("/tmp",()=>{});
        fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}");
        
    }
    const poll=JSON.parse(fs.readFileSync("/tmp/poll.json",'utf-8'));
    res.status(200).json({length:poll.votes.length,rap:poll.votes.reduce((freq,vote)=>freq+(vote.genre=='rap'),0)});
    
}