import { TrashSimple } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>

            <img className={styles.avatar} src="https://github.com/rocketseat.png" alt="Avatar do autor" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>  
                            <strong>Igor Regis</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2024-05-11 08:13:30'>Cerca há 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <TrashSimple size={20} />
                        </button>



                    </header>

                        <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}