import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
    <div className="Navbar">
      <ul className='my-link-wrapper'>
    <img src= 'https://github.com/DlSegovia/fsw-120/blob/master/week5/assignment_1_react_roto_router/my-app/src/Roto%20Router/logo.png?raw=true'/>
          <Link className='my-nav-links' to='/'> Home </Link>
          <Link className='my-nav-links' to='/about'> About </Link>
          <Link className='my-nav-links' to='/register'> Register </Link>
      </ul>
    </div>
  );
}

export default Navbar;