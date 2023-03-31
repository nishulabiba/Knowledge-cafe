import React from 'react';
import './Blog.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const {name, title, coverimages, authorimages, publish, readtime } = props.blog;
    return (
        <div className='d-flex flex-column gap-5 mx-5 my-3'>
            <img src={coverimages} alt="" />
            <div className="d-flex justify-content-between ">
                
                <div className="d-flex gap-3">
                <img src={authorimages} alt="" className='author' />
                    <div className="">
                    <h4>{name}</h4>
                    <p>{publish}</p>
                    </div>
                </div>
                <div className="">
                     <p>{readtime} mins read 
                     {/* !-- <FontAwesomeIcon icon={faEnvelope} /> --!  */}
                     </p> 
                </div>
            </div>
            <h1>{title}</h1>
            <p>#beginner #programming</p>
            <button className='btn mark-btn p-0'>Mark as read</button>
        </div>
    );
};

export default Blog;