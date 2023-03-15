const fs=require('fs');

export default function handler(req,res)
{
    
    const poll=JSON.parse(fs.readFileSync("/tmp/poll.json",'utf-8'));
    res.status(200).json(poll);
}