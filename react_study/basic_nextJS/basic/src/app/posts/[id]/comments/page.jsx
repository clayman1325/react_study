const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Posts ({params}) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <div>
            { comments.map(comment => (
                <article key={comment.id}>
                    <h1 style={{color: "#f02"}}>{comment.title}</h1>
                    <p>{comment.body}</p>
                </article>
            ))
            }
        </div>
    )

}