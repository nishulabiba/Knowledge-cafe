import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    console.log(props)
    const {bookmark, readtime, title, time} = props;
    
    const p = bookmark.length;
    return (
        <div className='me-3 sticky-top '>
            <div className="time ">
                <h5>Spent time on read : {time} mins</h5>
            </div>
            <div className="mt-3 bblogs rounded-3">
                <h5 id='bookm'>Bookmarked Blogs : {0}</h5>
                <p>{0}</p>
            </div>
        </div>
    );
};

export default Bookmark;