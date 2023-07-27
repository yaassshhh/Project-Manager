import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { MinorContext } from '../../context/Context'
const Login = () => {
    const contextdata_decoded = useContext(MinorContext)
    const {setUser} = contextdata_decoded
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [message,SetMessage] = useState(undefined)
    function handleChange(event) {
        if (event.target.type == 'password') {
            // console.log("password is ",event.target.value); 
            setPassword(event.target.value)
        }
        else if (event.target.type == 'text') {
            // console.log("email is ",event.target.value);
            setEmail(event.target.value)
            
        }
        // console.log(event.target.type);
    }
    const LoginUser =async()=>{
        const res = await fetch('http://localhost:5000/users/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        const data = await res.json()
        console.log(data);
        if (data.success == true) {
        setUser(data.user)
        router.push('/')
    }
    else if (data.success == false) {
        SetMessage(data.message)
    }
}




    return (
        <div >
            {/* referrerpolicy */}
            <div className="flex justify-center bg-slate-950" style={{width:"100%",height:"100vh"}}>
                <div className="h-[100%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-500 m-2">Log In</h1>
                        <div className="flex">
                            <ion-icon name="logo-google"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-violet-600 text-white bg-violet-600 hover:bg-white hover:text-violet-600 text-2xl">
                            </ion-icon>
                            <ion-icon name="logo-facebook"
                                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 text-2xl">
                            </ion-icon>
                        </div>
                        <div className="text-gray-700 font-semibold">  or </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        {message!=undefined?<p className='text-red-600'>{message}</p>:""}
                        <div className="">
                            <input type="text" placeholder="Email"
                                className=" bg-gray-900 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-white placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" onChange={handleChange}/>
                        </div>
                        <div className="">
                            <input type="password" placeholder="Password"
                                className=" bg-gray-900 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-white placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" onChange={handleChange}/>
                        </div>
                        <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
                            <input className="" type="checkbox" id="checkbox" name="checkbox"/>
                                <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">Remember Me</h3>
                        </div>
                    </div>
                    <div className="text-center mt-7">
                       {/* <Link href={'/'}> */}
                       <button onClick={()=>LoginUser()}
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">login</button>
                       {/* </Link> */}
                    </div>
                    <div className="text-center my-6 flex flex-col">
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                            Password ?</a>
                       <Link href={'/validation/Register'}>
                       <p className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                            Not a User? Create New Account</p>
                       </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login
