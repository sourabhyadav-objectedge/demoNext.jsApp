const fs=require('fs');

export default function handler(req,res)
{
    
    fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}");
}