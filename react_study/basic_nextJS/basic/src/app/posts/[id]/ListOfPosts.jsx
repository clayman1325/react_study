import Link from "next/link"
import LikeButton from "./LikeButton"

const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function ListOfPosts () {
    const posts = await fetchPost()

    return (
        <>
            {posts.map(post => (
                <article key={post.id}>
                    <Link href="/posts/{id" as={`/posts/${post.id}`}>
                        <h1 style={{color: "#f02"}}>{post.title}</h1>
                        <p>{post.body}</p>
                        <LikeButton />
                    </Link>
                </article>
            )).slice(1,5)}
        </>
    )
}