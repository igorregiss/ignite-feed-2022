import { TrashSimple } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    function handleDeleteComment() {
        if (props.onDeleteComment) {
            props.onDeleteComment(props.content)
        }
    }


    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/igorregiss.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>  
                            <strong>Igor Regis</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2024-05-11 08:13:30'>Cerca há 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <TrashSimple size={20} />
                        </button>



                    </header>

                        <p>{props.content}</p>

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