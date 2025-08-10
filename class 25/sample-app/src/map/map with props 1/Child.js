

function Child({posts}) {

    return (
       <div>
            <h2>Latest Blog Posts</h2>
            {posts.map((post) => (
                <div key={post.id} style={{border: "1px solid orange", marginBottom: "20px", padding: "20px"}}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <small>By: {post.author}</small>
                </div>

            ))}
       </div>
    )

}

export default Child