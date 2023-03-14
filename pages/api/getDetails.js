const fs=require('fs');

export default function handler(req,res)
{
    const poll=JSON.parse(fs.readFileSync(__dirname+"/../../../../data/poll.json",'utf-8'));
    res.status(200).json({length:poll.votes.length,rap:poll.votes.reduce((freq,vote)=>freq+(vote.genre=='rap'),0)});
    
}