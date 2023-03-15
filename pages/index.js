import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import rapImg from 'public/rap.jpg'
import popImg from 'public/pop.jpg'
export default function Home() {
  const {data:session,status}=useSession();
  const animateClass=styles.animate;
  const router=useRouter();
  const vote=async (genre)=>
  {
    const response=await fetch("/api/vote",
    {
      method:"POST",
      body:JSON.stringify({name:session.user.name,genre}),
      headers:{"Content-Type":"application/json"}
    });
    router.push("/description")
    
  }
  if(status==="loading")
    return <div className={animateClass} style={{textAlign:"center",fontSize:"2rem"}}>Loading...</div> 
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
