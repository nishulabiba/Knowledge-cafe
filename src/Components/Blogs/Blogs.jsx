import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = (props) => {
    
    //Loading Data
    const [blogs, setBlogs] = useState([]);

    const [bookmark, setBookmark] = useState([]);
    const [time, setWatchtime] = useState(0);
    const [b, setB] = useState([]);

    useEffect(()=>{
        fetch('/public/fakedata/data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    }, [])


    const addBookmark =(title)=>{

       if(b.includes(title)){
        toast.warn("You've already bookmarked this blog!");
       }
        const newB = [...b, title];
        setB(newB);
        
    }

    const read =(readtime)=>{
        const newBookmark = [...bookmark, readtime];
        setBookmark(newBookmark);
        let total = parseInt(readtime);
        for(let i of bookmark){
            i = parseInt(i);
            total= total+i;
        }
        
        setWatchtime(total);
    }



    return (
        <div className="blogs  ">
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    read = {read}
                    addBookmark = {addBookmark}
                    ></Blog>
                    
                    )
                }
            </div>
        <div className="side-container">
            <Bookmark
                 b ={b}
                 time ={time}
                 bookmark= {bookmark}></Bookmark>
            
            

        </div>
        </div>


    );
};

export default Blogs;