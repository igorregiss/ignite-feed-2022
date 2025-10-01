import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rocketseat.png" alt="Avatar do autor" />
                    <div className={styles.authorInfo}>
                        <strong>Igor Regis</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13h' dateTime='2024-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p>O projeto está no meu GitHub: <a href="">github.com/igorregis</a></p>
                <p>Gostou? Deixa seu feedback 👇</p>
            </div>

        </article>
    )
}
