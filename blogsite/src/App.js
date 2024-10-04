import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import Blogs from "./Components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

export default function App(){

  const{fetchBlogsPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogsPosts();
  },[]);
  return (
    <div>
   <Header/>
   <Blogs/>
   <Pagination/>
   
    </div>
  );
}
