const fs=require('fs');

export default function handler(req,res)
{
    
    fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}");
    res.status(200).end("<h1>Deleted the poll!</h1>");
}