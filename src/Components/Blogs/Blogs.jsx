import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    //Loading Data
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/public/fakedata/data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    }, [])
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

        </div>
        </div>


    );
};

export default Blogs;