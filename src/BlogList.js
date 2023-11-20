import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BlogList({blogs, title}){
    return(
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-priview" key={blog.id}> 
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>    
                </div>
            ))}
        </div>
    );
}

export default BlogList;