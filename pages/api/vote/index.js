import clientPromise from "lib/mongo/mongodb"

export default async function handler(req,res)
{
    if(!req.body.id||!req.body.name||!req.body.genre)
    {
        res.status(400).json({status:400});   
        return;
    }
    try
    {
        const dbClient=await clientPromise;
        const db = dbClient.db('poll-app-next-js-demo');
        const alreadyVoted= await db.collection('votes').find({id:req.body.id}).toArray();
        if(alreadyVoted.length)
        {
            res.status(403).json({status:403,genre:alreadyVoted[0].genre});
            return;
        }
        await db.collection('votes').insertOne({id:req.body.id,name:req.body.name,genre:req.body.genre,time:Date.now()});
        res.status(200).json({status:200,message:"Successfully voted"});
    }
    catch(error)
    {
        res.status(500).json({status:500});
    }

}