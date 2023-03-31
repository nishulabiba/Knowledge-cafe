import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css';

const Blogs = () => {
    //Loading Data
    const [blogs, setBlogs] = useState([]);

    const [bookmark, setBookmark] = useState([]);
    const [time, setWatchtime] = useState(0);

    useEffect(()=>{
        fetch('/public/fakedata/data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    }, [])




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
        <div className="blogs ">
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    read = {read}
                    ></Blog>
                    
                    )
                }
            </div>
        <div className="side-container">
            <Bookmark
                 time ={time}
                 bookmark= {bookmark}></Bookmark>
            
            

        </div>
        </div>


    );
};

export default Blogs;