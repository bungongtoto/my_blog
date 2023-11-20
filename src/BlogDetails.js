import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import loading from "./loading.gif"

function BlogDetails() {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    // Delete Blog
    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method:"DELETE"
        })
        history.push("/")
    }

    return(
        <div className="blog-details">
           {isPending && <div><img src={loading} alt='loadind spinner'/></div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <h2>Written By: {blog.author}</h2>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;