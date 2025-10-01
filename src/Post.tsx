export function Post(props: { author?: string; content?: string }) {
    return (
        <div>
            <h1 className="post-content">{props.content}</h1>
            <p className="author">{props.author}</p>
        </div>
    )
}