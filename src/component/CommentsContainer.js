import React from "react";

const commentData =[
    {
    name : "akshay",
    text :"lorem ipsom doloer sit",
    replies :[],
    },

    {
        name : "swati",
        text :"lorem ipsom doloer sit",
        replies :[
            {
                name : "rohit",
                text :"lorem ipsom doloer sit",
                replies :[
                    {
                        name : "akshay ",
                        text :"lorem ipsom doloer sit",
                        replies :[] ,
                    }
                ] ,
            }
        ]
        },
        {
            name : "madhu",
            text :"lorem ipsom doloer sit",
            replies :[],
            },
            {
                name : "akshay ",
                text :"lorem ipsom doloer sit",
                replies :[
                    {
                        name : "rushi",
                        text :"lorem ipsom doloer sit",
                        replies :[
                        {
                            name : "akshay Saini",
                            text :"lorem ipsom doloer sit",
                          replies :[],
                        }
                     ],
                    }
                ],
                },
                {
                    name : "Mukta",
                    text :"lorem ipsom doloer sit",
                    replies :[],
                    }
]
const Comment =({data})=>{
    const {name,text,replies} =data;
    return(
        <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
        <img  className="w-4 h-4 mt-5"
        alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
        <div className="px-1">
            <p className="font-bold">{name}</p>
            <p className="h-0 w-auto ">{text}</p>
        </div>
        </div>
    )
}
const CommentsList =({comments})=>{
    return comments.map((comment,index)=>(
        <div>
        <Comment key ={index}data ={comment}/>
        <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>
        </div>
        </div>
        

    ))

    
    }

const CommentsContainer = ()=>{
    return(
        <div className="m-3 p-1">
            <h1 className="text-xl font-bold">Comments :</h1>
            <CommentsList comments={commentData}/>

        </div>
    )
}

export default CommentsContainer;