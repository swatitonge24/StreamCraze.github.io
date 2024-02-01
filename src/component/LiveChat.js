import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {
const[liveMessage,setLiveMessage]= useState("")
  const dispatch=useDispatch();
  const chatMessages =useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    const i =setInterval(()=>{
      //API Polling
     
      dispatch(
      addMessage({
        name:generateRandomName(),
        message:makeRandomMessages(20)+"🚀 "
        }))

    },5000);
    return ()=>clearInterval(i);
  },[]);
  return (
    <>
    
    <div className=''>
    <h1 className='text-xl font-bold mt-auto pl-7'>Chat : </h1>
    <div className="w-full h-[330px] ml-1 p-1 border border-black bg-slate-100
    rounded-lg  overflow-y-scroll  flex flex-col-reverse">
    
    <div>
    
   {chatMessages.map((c,i)=>(
<ChatMessage key={i}name={c.name} message={c.message}/>
   ))
   }
   
    </div>
    </div>
    </div>
    
    <form className='w-full ml-2 p-2 border border-black' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessage({
          name:"Swati",
          message:liveMessage,
        })
      )
      setLiveMessage("");
    }}>
    <input className='px-1 w-80' type="text"
      value={liveMessage}
      onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}
    />
    <button className='mx-2 px-2 bg-green-100  border border-none rounded-lg '>Send</button>
      
    </form>
    </>
  )
}

export default LiveChat;
