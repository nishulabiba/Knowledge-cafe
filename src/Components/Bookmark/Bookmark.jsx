import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    
    const { time, b} = props;
    
    
    return (
        <div className='me-3 sticky-top '>
            <div className="time ">
                <h5>Spent time on read : {time} mins</h5>
            </div>
            <div className="mt-3 bblogs rounded-3">
                <h5 id='bookm'>Bookmarked Blogs : {b.length}</h5>
                <div className="mb-2 p-2 ">
                <div className='para '>{
                    b.map(c=> 
                        <div className="">
                            <p className='mt-2 bg-white p-2 m-2 rounded-3 text-center'> {c}</p>
                        </div>
                        )
                }</div>
                </div> 
            </div>
        </div>
    );
};

export default Bookmark;