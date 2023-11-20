import BlogList from "./BlogList";
import loading from "./loading.gif"
import useFetch from "./useFetch";

function Home() {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs !!!" />}
            {isPending && <div><img src={loading} alt='loadind spinner'/></div>}
            {/* -------------------------trying to output toto's blog------------------- */}
            {/* <BlogList blogs={blogs.filter((blog)=>{
                if(blog.author === "toto"){
                    return true
                }else{
                    return false;
                }
            })} title="toto's Blog !!!"  handleDelete={handleDelete} /> */}
        </div>
    );
}

export default Home;