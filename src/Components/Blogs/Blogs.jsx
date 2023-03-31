import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css';

const Blogs = () => {
    //Loading Data
    const [blogs, setBlogs] = useState([]);

    const [bookmark, setBookmark] = useState([]);

    useEffect(()=>{
        fetch('/public/fakedata/data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    }, [])


    useEffect(()=>{

    },[])

  useEffect(()=>{
    
  },[])



    return (
        <div className="blogs ">
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    ></Blog>
                    )
                }
            </div>
        <div className="side-container">

            <Bookmark ></Bookmark>

        </div>
        </div>


    );
};

export default Blogs;