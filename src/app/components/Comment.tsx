"use client"

import { AlertDialogHeader, AlertDialogFooter } from '@/components/ui/alert-dialog'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog'
import React, { useState } from 'react'

const Comment = () => {
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [mainTask, setMainTask] = useState<any>([])
  
    
  const submitHandler = (e : any)=>{
    if(title === ""){
      e.preventDefault()
      alert("Please write a comment")
    }
    else if(name === ""){
      e.preventDefault()
      alert("Please write your name")
    }
    else{
    e.preventDefault()
    setMainTask([...mainTask, { title,name}])
    setName("")
    setTitle("")
    console.log(mainTask)
  }
  }


    const deleteHandler = (i: any) =>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
    }
  
    let renderTask = <h2></h2>
  
    if(mainTask.length>0){
      renderTask = mainTask.map((t:any,i:any)=>{
        return (
            <li key={i}>
            <div className=' dark:bg-[#0C0A09] border border-black/20 dark:border-background rounded-xl drop-shadow-md '>
            <ul className="flex items-center justify-between">
            <div className=" mt-6 mx-5 ">
                <h5 className="block  text-primary lg:text-lg font-semibold uppercase break-normal">{t.name}</h5>
                <h5 className="block text-gray-700 dark:text-muted-foreground lg:text-md">{t.title}</h5>
            </div>
            </ul>
            <button onClick={()=>{
               deleteHandler(i)
              }} 
              className="mt-6 mb-7 mx-5 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-background hover:bg-primary/90 h-5 px-3 py-4">Delete
            </button>
            </div>
            <div className='my-5'></div>
            
                

            </li>
            
        )
      })
    }
    return (
      <>
      <div className=' flex justify-center xl:justify-center lg:max-w-[100vw] xl:max-w-[100vw] lg:mx-25 xl:mx-25 md:mx-5  sm:mx-5' >
        <div>
      <h1 className="text-foreground font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-2xl"
      >Comment:</h1>
      <form onSubmit={submitHandler}>

      <textarea  className='mt-4 text-foreground flex min-h-[20px] w-[80vw] sm:w-[80vw] md:w-[75vw] lg:w-[50vw] rounded-md border border-black border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none'
        placeholder="Enter your name"
        value={name}
        onChange={(e)=> {
          setName(e.target.value)
        }}/>


        <textarea  className='mt-4 text-foreground flex min-h-[80px] w-[80vw] sm:w-[80vw] md:w-[75vw] lg:w-[50vw] rounded-md border border-black border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none'
        placeholder="Comment your thoughts here..."
        value={title}
        onChange={(e)=> {
          setTitle(e.target.value)
        }}/>

  
        <button className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >Comment </button>
      </form>
      </div>
      </div>

        <div className=' flex justify-center xl:justify-center lg:max-w-[100vw] xl:max-w-[100vw] lg:mx-25 xl:mx-25 md:mx-5  sm:mx-5'>
      <div className="mt-10 p-8 w-[80vw] sm:w-[80vw] md:w-[75vw] lg:w-[50vw]">
        <ul>
          {renderTask}
        </ul>
      </div>
      </div>
      
      </>
    )
  }

export default Comment