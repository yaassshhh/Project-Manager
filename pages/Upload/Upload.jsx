import React, { useContext, useState } from "react";
import Router, { useRouter } from "next/router";
import {MinorContext} from '../../context/Context'
import Navbar from "../other/Navbar";
const Upload = () => {
    const [message,SetMessage] = useState()
    const [title,setTitle] = useState(undefined)
    const [desc,setDesc] = useState(undefined)
    const [skills,setSkills] = useState(undefined)
    
    const context = useContext(MinorContext)
    const {user} = context
    // console.log(user);

    const router = useRouter()
    function handleChange(event) {
        if (event.target.name == 'skills') {
            console.log("skills is ",event.target.value); 
            setSkills(event.target.value)
        }
        else if (event.target.name == 'title') {
            console.log("title is ",event.target.value);
            setTitle(event.target.value)
        }
        else if (event.target.type == 'textarea') {
            console.log("desc is ",event.target.value);
            setDesc(event.target.value)
        }
       else{
           console.log(event.target.type);

       }
    }
    const UploadData = async()=>{
      // console.log("request come");
        if (desc==undefined||title==undefined||skills==undefined) {
          // console.log("undefined things");
          SetMessage("Complete all necessary details first")
        }
      const res = await fetch('http://localhost:5000/products/create',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
               title:title,
               desc:desc,
               skills:skills,
               userId: "6443b3b8c84a79ac291588f3"
            })
        })
        const data = await res.json()
        console.log(data);
        if (data.success == true) {
        router.push(`/Upload/DataUpload/${data.product._id}`)
    }
    else if (data.success == false) {
        SetMessage(data.message)
    }
    }
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center bg-gray-900" style={{width:"100%",height:"100vh"}}>
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] h-[670px] md:h-[460px] m-2">
          <div
            className=" w-full md:w-3/4  bg-center  bg-cover rounded-lg" 
            style={{backgroundImage: "url(https://images.unsplash.com/photo-1533497374533-d860dceecf74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80)",height:"100vh"}}
          >
            
            <div className="text-white text-base font-semibold text-center my-10 space-y-2">
              <h1 className="">Don't have an account ?</h1>
              <h3>
                {" "}
                <a
                  href="#"
                  className="underline underline-offset-4 tracking-wide hover:text-blue-400"
                >
                  Signup
                </a>{" "}
              </h3>
            </div>
          </div>
          <div className="h-[90%] w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              
              <h1 className="font-semibold text-gray-400">Minor Project Upload</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  name="title"
                  placeholder="Project title"
                  className=" bg-slate-800 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-slate-200 placeholder:text-slate-400 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  name="desc"
                  placeholder="desc"
                  className=" bg-slate-800 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-slate-200 placeholder:text-slate-400 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  onChange={handleChange}
                />
              </div>
          
              <div className="">
                <input
                  type="skills"
                  name="skills"
                  placeholder="Skills / Technology"
                  className=" bg-slate-800 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-slate-200 placeholder:text-slate-400 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  onChange={handleChange}
                />
              </div>
           
           
            </div>
            <div className="text-center mt-7">
       <h1 style={{color:"white",cursor:"pointer"}} onClick={()=>UploadData()}>Next</h1>
            </div>
            <div className="text-center my-6">
              <p

                className="text-sm font-medium text-red-900 hover:text-blue-500 hover:underline"
              >
                CANCEL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
