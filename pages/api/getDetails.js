import clientPromise from "lib/mongo/mongodb"

export default async function handler(req,res)
{
    try
    {
        const dbClient=await clientPromise;
        const db = dbClient.db('poll-app-next-js-demo');
        const data= await db.collection('votes').find({}).toArray();
        res.status(200).json({status:200,length:data.length,rap:data.reduce((freq,vote)=>{return freq+=(vote.genre==='rap')},0)});
    }
    catch(error)
    {
        res.status(500).json({status:500});
    }

}