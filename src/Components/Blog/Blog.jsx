import React from 'react';
import './Blog.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {name, title, coverimages, authorimages, publish, readtime } = props.blog;

    const read = props.read;
    const addBookmark = props.addBookmark;

    return (
        <div className='d-flex flex-column gap-3 mx-5 my-3 card rounded-2'>
            <img src={coverimages} alt="" />
            <div className="d-flex justify-content-between mt-0 ">
                
                <div className="d-flex gap-3">
                <img src={authorimages} alt="" className='author' />
                    <div className="">
                    <h4>{name}</h4>
                    <p>{publish}</p>
                    </div>
                </div>
                <div className="readbook d-flex gap-1 align-items-center">
                     <p>{readtime} mins read </p>
                     <button className='btn' onClick={()=>addBookmark(title)}><img src="../../../public/bookmark-regular.svg" alt="" /> </button>

                </div>
            </div>
            <h1 className='mt-0'>{title}</h1>
            <p>#beginner #programming</p>
            <button onClick={()=>read(readtime)} className='btn mark-btn p-0'>Mark as read</button>
        </div>
    );
};

export default Blog;