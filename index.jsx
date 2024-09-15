import React, { useEffect, useState } from "react";

function GetRequests(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      const fetchData = async () =>{
        try{
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
            if(!response.ok){
                throw new Error("error fetching data");
            }

            const data = await response.json();
            setPosts(data);
        }catch(error){
            setError(error, "error fetching data from api");
        }finally{
            setLoading(false);
        }
      }
      fetchData();
    },[])
    
    if(loading){
        <div>
            <p>loading...</p>
        </div>
    }

    if(error){
        <div>
            <p>error...{error}</p>
        </div>
    }

    return(
        <>
        <p>get answer</p>
        {posts.map((post)=>(
            <>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            </>
        ))}
        </>
    )
}

export default GetRequests;