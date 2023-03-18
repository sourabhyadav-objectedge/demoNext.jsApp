import { useEffect, useState } from "react"
import styles from "/styles/Description.module.css"
import { useRouter } from "next/router";
export default function Description()
{
    const [length,setLength]=useState('Loading...');
    const [rap,setRap]=useState('Loading....');
    const [name,setName]=useState('');
    const [genre,setGenre]=useState('');
    const router=useRouter();
    const id=parseInt(router.query.descriptionId);  
   
    useEffect(()=>
    {
        const fetchDetails=async ()=>
        {
            
            if(id)
            {
                const response=await fetch(`/api/description/${id.toString()}`);
                const data=await response.json();
                if(data.status!==200)
                {
                    setName('An error Occured');
                    setGenre('An error Occured');
                    setRap('An error occured');
                    setLength('An error Occured')
                    return;
                }
                setName(data.name);
                setGenre(data.genre);
                setLength(data.length);
                setRap(data.rap)
            } 
        }
        fetchDetails();
    },[id]);

    if(length===0)
        return <h1>Found no votes</h1> 
    
    return <div className={styles.container}>
    {2*rap>length&&<h1>Rap Wins!</h1>}
    {2*rap<length&&<h1>Pop Wins!</h1>}
    {2*rap===length&&<h1>There is a tie!</h1>}
    <h2>Rap: {rap}, Pop: {length-rap}</h2>
    <div className={styles.container}>Vote {id}: <br/> By:{name} <br/>Voted to: {genre}  </div>
    {id<length&&<button className={styles.next} onClick={()=>{setName('Loading...');setGenre('Loading...');router.push(`/description/${id+1}`)}}>Next</button>}
    {id!==1&&<button className={styles.previous}  onClick={()=>{setName('Loading...');setGenre('Loading...');;router.push(`/description/${id-1}`)}}>Previous</button>}
    </div>
}