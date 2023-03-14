import { useRouter } from "next/router";
import styles from "styles/NavBar.module.css"
export default function NavBar(props)
{
    const router=useRouter();

    const homeClickHandler=()=>
    {
        router.push("/");
    }
    const aboutClickHandler=()=>
    {
        router.push("/about");
    }
    const descriptionClickhandler=()=>
    {
        router.push("/description");
    }
    return (
        <div className={styles.bar }>
            <div className={styles.banner}>
                The Poll app
            </div>
            <div className={styles.links}>
                <div className={styles.link} onClick={homeClickHandler}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Home</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    Home
                </div>
                <div className={styles.link} onClick={aboutClickHandler}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Information</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M196 220h64v172"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="40" d="M187 396h138"/><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
                    About
                </div>
                <div className={styles.link} onClick={descriptionClickhandler}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Clipboard</title><path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
                    Poll Description
                </div>
                <div className={styles.link}>
                    <svg className={styles.svg}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Log In</title><path d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 336l80-80-80-80M80 256h272"/></svg>
                    Sign In
                </div>
            </div>
        </div>
    );
}