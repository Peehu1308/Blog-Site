import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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
        <div className="max-w-full mx-auto p-4">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl font-bold mb-6">
                Latest Blogs
            </h1>
            
            <Link to="/addblog" className="rounded-xl py-2 px-3 bg-[#371D10] text-white text-xl" >New Blog</Link>
            
            </div>

            <div className="grid grid-cols-2 gap-4">
                {blogs.map((blog)=>(
                <div key={blog._id}
                className="rounded-2xl border border-gray-300 p-4 mb-4"
                >
                    <h2 className="text-2xl font-bold underline">{blog.title}</h2>
                    <p>
  By {blog.author}
   {/* • {new Date(blog.createdAt).toLocaleDateString()} */}
</p>

                    <p className="mt-2">{blog.content}</p>
                </div>
            ))}
            </div>

        </div>
    )
};

export default Blogs;