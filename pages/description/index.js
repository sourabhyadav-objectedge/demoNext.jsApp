import { useEffect, useState } from "react"
import styles from "/styles/Description.module.css"
import { useRouter } from "next/router";
export default function Description()
{
    const [length,setLength]=useState('Loading...');
    const [rap,setRap]=useState('Loading....');
    const router=useRouter();
    const pointer=0;
    useEffect(()=>
    {
        const fetchDetails=async ()=>
        {
            const response=await fetch("/api/getDetails");
            const data=await response.json();
            if(data.status!==200)
            {
                setLength('An error Occured');
                setRap('An error Occured');
                return;
            }
            setLength(parseInt(data.length));
            setRap(parseInt(data.rap));
        }
        fetchDetails();
    },[]);

    if(length===0)
        return <div style={{textAlign:"center",fontSize:"2rem"}}>Found no votes!</div>; 
    
    return <div className={styles.container}>
    {2*rap>length&&<h1>Rap Wins!</h1>}
    {2*rap<length&&<h1>Pop Wins!</h1>}
    {2*rap===length&&<h1>There is a tie!</h1>}
    <h2>Rap: {rap}, Pop: {Object.is(length-rap,NaN)?"Loading...":length-rap}</h2>
    <button className={styles.start} onClick={()=>{router.push("/description/1")}}>Start Exploring who voted</button>
    </div>
}