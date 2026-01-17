import { useState } from "react"


const AddBlog=()=>{
    const [title,settitle]=useState("");
    const [content,setcontent]=useState("");
    const [author,setauthor]=useState("");
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);
    const [success,setsuccess]=useState(false);

    const handlesubmit=async(e)=>{
        e.preventDefault();
        setloading(true);
        seterror(null);
        setsuccess(false);


        try{
            const res=await fetch("http://localhost:5000/api/blogs",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },

                body:JSON.stringify({
                    title,
                    content,
                    author,
                }),
            });

            if(!res.ok)throw new Error("Failed to add ");

            settitle("");
            setcontent("");
            setauthor("");
            setsuccess(true);
        }
        catch(err){
            seterror(err.message);
        }
        finally{
            setloading(false);
        }

    };

    return(
        <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Blog Added</p>}

            <form onSubmit={handlesubmit} className="space-y-4">
                <input type="text" placeholder="Title" className="w-full border p-2"
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                required/>

                <input type="text"
                placeholder="Author"
                value={author}
                onChange={(e)=>setauthor(e.target.value)} />

                <textarea
                placeholder="Content"
                className="w-full border p-2 h-32"
                value={content}
                onChange={(e)=>setcontent(e.target.value)}
                required/>


                <button type="submit" disabled={loading} className="bg-black text-white px-4 py-2">
                    {loading?"Adding...":"Add Blog"}
                </button>
            </form>

        </div>

    )


};

export default AddBlog;