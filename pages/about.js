import styles from 'styles/About.module.css'
export default function About()
{
    return <div className={styles.main}>
    <h1>About</h1>
    <p>This is a simple poll app.You can cast a vote by signing in Github.</p>
    <ul>
        <li>You can view every single vote that has been casted on the poll ! No privacy ! This is an open poll !</li>
        <li>Cast your vote by choosing Rap or Pop as the best music genre.</li>
    </ul>
    </div>;
}