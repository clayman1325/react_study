const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
        { comments.map(comment => (<p></p>))
        }
    )

}