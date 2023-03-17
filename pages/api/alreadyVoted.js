import clientPromise from "lib/mongo/mongodb"

export default async function handler(req,res)
{
    if(!req.body.id)
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
            res.status(200).json({status:200,voted:true,genre:alreadyVoted[0].genre});
            return;
        }
        else
        {
            res.status(200).json({status:200,voted:false})
        }
    }
    catch(error)
    {
        res.status(500).json({status:500});
    }

}