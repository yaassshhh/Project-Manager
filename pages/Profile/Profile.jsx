import React, { useContext } from 'react'
import Navbar from '../other/Navbar'
import { MinorContext } from '../../context/Context'

const Profile = () => {


    const context = useContext(MinorContext)
    const {user} = context
  return (
<>
<Navbar/>
<div className="flex justify-center  bg-slate-900 p-5 md:p-16 lg:p-28"  style={{width:"100%",height:"96vh"}}>
    <div className="flex flex-col text-right justify-center items-end max-w-7xl  text-white">
        <h1 className="text-base font-medium tracking-wider ">Welcome to my Client Template</h1>
        <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; </span>
        <div className="flex flex-col text-white mt-5">
            <h1 className="text-4xl md:text-[50px] font-semibold">Hello I'm {user?user.name?user.name:"Unknown":""}</h1>
            <p className="text-xl mt-2 md:mt-4 tracking-wide">Designer - Developer - Freelancer</p>
        </div>
        <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Accounts for coding and abstracting of patient encounters, including diagnostic and procedural information, significant reportable elements, and complications.</p>
        <div className="space-x-3 mt-6 md:mt-4">
            <a href="#"> <i
                    className="fa-brands fa-facebook-f bg-slate-900 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-twitter bg-slate-900 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-linkedin bg-slate-900 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#"> <i
                    className="fa-brands fa-chrome bg-slate-900 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>

        </div>
        <div className="flex mt-10 space-x-5">
            {/* https://github.com/yaassshhh */}
            <Link href={'https://github.com/yaassshhh'}>
            <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">Github</button>
            </Link>
            <button
                className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
                Me</button>

        </div>
    </div>
</div>

</>

  )
}

export default Profile
