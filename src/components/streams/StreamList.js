import React from 'react';
import { Link } from 'react-router-dom';


const StreamList = () => {
   return (
      <div className="stream-list">
         <Link to="/streams/show">StreamShow</Link>
      </div>
   );
}

export default StreamList;