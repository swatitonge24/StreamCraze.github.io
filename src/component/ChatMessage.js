import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
     <img className='h-4 w-4' 
     alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
     <span className='font-semibold px-2'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
