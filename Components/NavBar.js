import styles from "styles/NavBar.module.css"
export default function NavBar(props)
{
    

    return (
        <div className={styles.main }>
            <div>Welcome</div>
            <div className={`${styles.main} ${styles.home}`}>
                Home
            </div>
            <div>
                About
            </div>
            <div>
                Poll Description
            </div>
            <div>
                Sign In
            </div>
        </div>
    );
}