import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const[searchQuary,setSearchQuery] = useState("");
  const [suggestions,setSuggetions] = useState([]);
  const [showSuggestions,setShowSuggestions]= useState(false);

  const searchCache =useSelector((store)=>store.search);

  // *searchCache = {"iphone":["iphone 11" , iphone 14"]},
  //searchQuary =iphone
    
  useEffect(()=>{
    console.log(searchQuary);
    const timer = setTimeout(()=> {
    if(searchCache[searchQuary]){
      setSuggetions(searchCache[searchQuary]);
    } else{
      getSearchSuggations()
    }
  },200);
    return ()=>{
      clearTimeout(timer);
    };
  }, [searchQuary]);
  const getSearchSuggations = async()=>{
    console.log("API CALL -" + searchQuary);
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuary);
  const json= await data.json();
  //console.log(json[1]);
  setSuggetions(json[1]);

  //update cache
dispatch(cacheResults({
    [searchQuary]:json[1],
  }
))
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu()); 
  };
  return (
    <div className='grid grid-flow-col m-2 p-2'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-12 mx-3 cursor-pointer' 
        alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <a href="/">
      <img  className='h-10'
      alt="logo" src="https://seeklogo.com/images/T/tencent-video-icon-logo-780F21E542-seeklogo.com.png"/>
      </a>
      </div>
    

<div className='col-span-10 '>
<div>
<input  className ="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"
  value={searchQuary}
  onChange={(e)=>setSearchQuery(e.target.value)}
  onFocus={()=>setShowSuggestions(true)}
  onBlur={()=>setShowSuggestions(false)}
/>
<button className='border border-gray-400 px-3  p-2 rounded-r-full'>
  <img className='h-3'
  alt ="search-icon" src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"/>
</button>
</div>
{showSuggestions && (
 <div className='fixed bg-white px-2 py-2 w-[29rem] shadow-lg rounded-lg border border-gray-100'>
 <ul className='list-none'>
 {suggestions.map(s=><li key={s} className='py-2 px-1  hover:bg-gray-100'><img className='h-4 px-1'
  alt ="search-icon" src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"/>
  {s}</li>)}
  
  

 </ul>
 </div>
)}
 </div>
<div className='col-span-1 w-2 h-2'>

<img className='h-8 w-8' 
alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>



</div>
</div>
  );
  };

export default Head;

