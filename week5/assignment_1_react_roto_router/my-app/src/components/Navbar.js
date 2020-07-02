import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="Navbar">
      
<img/>
      <ul className='my-link-wrapper'>
          <Link className='my-nav-links' to='/'> Home </Link>
          <Link className='my-nav-links' to='/about'> About </Link>
          <Link className='my-nav-links' to='/register'> Register </Link>
      </ul>
    </div>
  );
}

export default Navbar;