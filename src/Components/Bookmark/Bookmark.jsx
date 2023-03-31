import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    console.log(props)
    return (
        <div className='me-3 '>
            <div className="time ">
                <h5>Spent time on read : {} mins</h5>
            </div>
            <div className="mt-3 bblogs rounded-3">
                <h5 id='bookm'>Bookmarked Blogs : {}</h5>
                <p>..{}</p>
            </div>
        </div>
    );
};

export default Bookmark;