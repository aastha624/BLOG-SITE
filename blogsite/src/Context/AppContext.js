import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//step1-create context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpage, settotalpage] = useState(null);


    //data filling 

    async function fetchBlogsPosts(page = 1) {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log("printing the final url");
        console.log(url);

        try {
            const result = await fetch(url);
            const data = await result.json();
            setpage(data.page);
            setposts(data.posts);
            settotalpage(data.totalpage);
        }
        catch (error) {
            console.log("error in fetching data");
            setpage(1);
            setposts([]);
            settotalpage(null);
        }
        setloading(false);
    }

    function handlepagechange(page){
        setpage(page);
        fetchBlogsPosts(page);
    }


    //pass all object //pass children ko value
    const value = {
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpage,
        settotalpage,
        handlepagechange,
        fetchBlogsPosts
    };

    //step2 pass provider

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// api call useeffect the thay App.js ma thay
