import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {name, title, coverimages, authorimages, publish} = props.blog;
    return (
        <div className='d-flex flex-column gap-5 mx-5'>
            <img src={coverimages} alt="" />
            <div className="d-flex">
                <img src={authorimages} alt="" className='author' />
                <div className="">
                    <h4>{name}</h4>
                    <p>{publish}</p>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Blog;