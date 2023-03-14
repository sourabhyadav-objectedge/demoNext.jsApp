import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.poll}>
      <h1 className={styles.title}>Please cast your vote</h1>
      <div className={styles.options}>
        <div className={styles.rap}><Image src="/../public/rap.jpg" width={200} height={200} className={styles.rapImage}/><p>Rap</p></div>
        <div className={styles.divider}></div>
        <div className={styles.pop}><Image src="/../public/pop.jpg" width={200} height={200} className={styles.popImage}/><p>Pop</p></div>
      </div>
    </div>
    </>
  )
}
