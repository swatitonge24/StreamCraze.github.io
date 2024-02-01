import React from 'react'
import { useSelector } from 'react-redux';
//import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen =useSelector((store) =>store.aap.isMenuOpen);
  //early return pattern
  if( !isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>

<ul className='list-none cursor-pointer'>
        <li className='no-underline'>
        <Link to ="/">Home</Link></li>
        <li>Shorts</li>
        <li>Vedio</li>
        <li>Live</li>
      </ul>
      <h4 className='font-bold'>Subscription</h4>
      <ul className='list-none cursor-pointer'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h4 className='font-bold '>Watch Later</h4>
      <ul className='list-none cursor-pointer'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      
    </div>
  )
}

export default Sidebar;
