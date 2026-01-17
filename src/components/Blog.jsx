import { useEffect, useState } from "react"

const Blogs=()=>{
    const [blogs,setblogs]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);


    useEffect(()=>{
        const fetchBlogs=async()=>{
            try{
                const res=await fetch("http://localhost:5000/api/blogs");
                if(!res.ok)throw new Error("Failed to fetch blogs");
                const data=await res.json();
                setblogs(data);
            }

            catch(err){
                seterror(err.message);
            }
            finally{
                setloading(false);
            }
        };

        fetchBlogs();
    },[]);

    if(loading)return <p>Loading Blogs...</p>
    if(error)return <p>Error:{error}</p>

    return(
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">
                Latest Blogs
            </h1>

            {blogs.map((blog)=>(
                <div key={blog._id}
                className="border-b border-gray-300 pb-4 mb-4"
                >
                    <h2 className="">{blog.title}</h2>
                    <p>
  By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
</p>

                    <p className="mt-2">{blog.content}</p>
                </div>
            ))}

        </div>
    )
};

export default Blogs;