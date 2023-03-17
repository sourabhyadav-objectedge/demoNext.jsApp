import clientPromise from "lib/mongo/mongodb"

export default async function handler(req,res)
{
    try
    {
        const dbClient=await clientPromise;
        const db = dbClient.db('poll-app-next-js-demo');
        const data= await db.collection('votes').find({}).toArray();
        data.sort((vote1,vote2)=>vote1.time-vote2-time);
        const index=req.query.descriptionId;
        if(index>=1&&index<=data.length)
            res.status(200).json({status:200,length:data.length,rap:data.reduce((freq,vote)=>{return freq+=(vote.genre==='rap')},0),name:data[index-1].name,genre:data[index-1].genre});
        else 
            res.status(400).json({status:400});
    }
    catch(error)
    {
        res.status(500).json({status:500});
    }

}