const fs=require('fs');

export default function handler(req,res)
{
    const notExist=false;
    if(!fs.existsSync("/tmp/poll.json"))
        fs.writeFileSync("/tmp/poll.json","{\"votes\":[]}"),notExist=true;
    const poll=JSON.parse(fs.readFileSync("/tmp/poll.json",'utf-8'));
    const length=poll.votes.length;
    const index=parseInt(req.query.descriptionId);
    if(index<=length&&index>=1)
        res.status(200).json({name:poll.votes[index-1].name,genre:poll.votes[index-1].genre});
    else
        res.status(404).json({name:(notExist?"poll object is deleted":"404"),genre:"404"});
    
}