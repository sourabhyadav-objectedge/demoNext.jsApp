import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import rapImg from 'public/rap.jpg'
import popImg from 'public/pop.jpg'
import { useEffect, useState } from 'react';
export default function Home() {
  const vote=async (genre)=>
  {
    const response=await fetch("/api/vote",
    {
      method:"POST",
      body:JSON.stringify({name:session.user.name,genre,id:session.user.id}),
      headers:{"Content-Type":"application/json"}
    });
    const data=await response.json();
    if(data.status!==200)
    {
      setError(true);
      return ;
    }
    router.push("/description")
  }
  
  
  const {data:session,status}=useSession();
  const animateClass=styles.animate;
  const router=useRouter();
  const [error,setError]=useState(false);
  const [alreadyVoted,setAlreadyVoted]=useState({status:false,genre:null,loaded:false});
  useEffect(
    ()=>
    {
      if(status==="authenticated")
      {
        if(!session.id)
        {
          setError(true);
        }
    
        const voted=async()=>
        {
          const response=await fetch("/api/alreadyVoted",
          {
            method:"POST",
            body:JSON.stringify({id:session.user.id}),
            headers:{'Content-Type':'application/json'}

          });
          const data=await response.json();
          if(data.status!==200)
          {  
            setError(true);
            return;
          }
          else if(data.voted)
          {
            setAlreadyVoted({status:true,genre:data.genre,loaded:true});
          }
        }
        voted();
      }
    }
    ,[status,session]);

  if(alreadyVoted.status)return (
    <>
      <div className={animateClass} style={{textAlign:"center",fontSize:"2rem"}}>You already voted for {alreadyVoted.genre}</div>
      {alreadyVoted.genre==="rap"&&<div className={styles.rap} style={{textAlign:"center"}}><Image alt="Chose Rap" style={{borderRadius:"50%"}} src={rapImg} width={200} height={200} className={styles.rapImage} placeholder='blur'/></div>}
      {alreadyVoted.genre==="pop"&&<div className={styles.pop} style={{textAlign:"center"}}><Image alt="Chose Pop" style={{borderRadius:"50%"}} src={popImg} width={200} height={200} className={styles.popImage} placeholder='blur'/></div>}
    </>

  );
  if(error)
    return <div className={animateClass} style={{textAlign:"center",fontSize:"2rem"}}>An Error Occured!</div>
  if(status==="loading")
    return <div className={animateClass} style={{textAlign:"center",fontSize:"2rem"}}>Loading...</div> 
  if(status==='authenticated'&&!alreadyVoted.loaded)
    return <div className={animateClass} style={{textAlign:"center",fontSize:"2rem"}}>Checking if you already voted</div>
  if(status==="unauthenticated")
    return <div className={animateClass} style={{textAlign:"center",fontSize:"2rem",marginTop:"2rem"}}>You need to be logged in to cast a vote</div>
  return (
    <>
    <div className={styles.poll+" "+animateClass}>
      <h1 className={styles.title}>Please cast your vote</h1>
      <div className={styles.options}>
        <div className={styles.rap} onClick={()=>{vote('rap')}}><Image alt="Choose Rap" src={rapImg} width={200} height={200} className={styles.rapImage} placeholder='blur'/><p>Rap</p></div>
        <div className={styles.divider}></div>
        <div className={styles.pop} onClick={()=>{vote('pop')}}><Image alt="Choose Pop" src={popImg} width={200} height={200} className={styles.popImage} placeholder='blur'/><p>Pop</p></div>
      </div>
    </div>
    </>
  )
}
