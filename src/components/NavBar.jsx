
import {Link} from 'react-router-dom';
import React from 'react'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>Personal <span>Library</span></h1>
        </div>
        <div className='navbar-links'>
            <Link to='/' >Home</Link>
            <Link to='/create' >Create</Link>
        </div>
    </div>
  )
}
