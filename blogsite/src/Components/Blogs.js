import React, { useContext } from 'react'
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

    //consume data using usecontext hook 
    const {posts,loading} =useContext(AppContext);

  return (
    <div>{
      loading ? (<Spinner/>) : (
        posts.length===0? (
            <div>
                <p>
                   No Post Found 
                </p>
                </div>): 
                (posts.map((post)=>(

                 <div key={post.id}>

                  <p>{post.title}</p>
                  <p>
                    by <span> {post.author}</span> on <span>{post.category}</span>
                  </p>
                  <p>posted on {post.date}</p>
                  <p>{post.content}</p>
                  <div>
                    {post.tags.map((tag,index)=>{
                      return <span key={index}>{`#${tag}`}</span>
                    })}
                    {/* key na hoi to index pass kari ne yuse kari levu */}
                 </div>
</div>
                )))
        )
    }
     
    </div>
  )
}

export default Blogs
