import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Post({ author, content, publishedAt }) {
    const publishedDateFormatted = format(
        publishedAt,
        "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
        { locale: ptBR }
    )

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    const [comments, setComments] = useState([
        'Adorei esse post!',
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(c => c !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativetoNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return (
                          <p key={line.content}>
                            <a href={line.content}>{line.content}</a>
                          </p>
                        )
                    }
                    return null
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
               <footer>
                <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment}
                        content={comment}
                        onDeleteComment={deleteComment} />
                    )
                })}
            </div>


        </article>
    )
}
