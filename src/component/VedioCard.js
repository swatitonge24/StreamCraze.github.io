import React from 'react'

const VedioCard = ({info}) => {
    //console.log(info);
    
const { snippet,statistics} = info;
const { channelTittle,title,thumbnails}=snippet;

   return (
    <div className='p-2 m-4 w-80 '>
    <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
    <ul className='list-none'>
      <li className='font-semibold py-2 '>{title}</li>
      <li>{channelTittle}</li>
      <li>{statistics.viewCount}views</li>
    </ul>
    
     </div> 
  )
  }
  export const AdVedioCard =({info})=>{
    return(
      <div className='border border-orange-900'>
        <VedioCard info={info}/>
      </div>
    )
    }
export default VedioCard;
