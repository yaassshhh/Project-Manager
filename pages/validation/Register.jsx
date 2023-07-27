import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { MinorContext } from '../../context/Context'
import { useRouter } from 'next/router'
const Register = () => {
    const router = useRouter()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [message, SetMessage] = useState()
    const [CheckBox, setCheckBox] = useState(false)
    
    const context = useContext(MinorContext)
const {setUser} =context

const handleCheckbox =()=>{
    setCheckBox(!CheckBox)
    console.log(CheckBox);
}


    function handleChange(event) {
        if (event.target.name == 'password') {
            // console.log("password is ",event.target.value); 
            setPassword(event.target.value)
        }
        else if (event.target.name == 'name') {
            console.log("name is ",event.target.value);
            setName(event.target.value)  
        }
        else if (event.target.type == 'checkbox') {
            console.log("name is ",event.target);
            // setName(event.target.value)  
        }
        else if (event.target.name == 'phone') {
            console.log("phone is ",event.target.value);
            setPhone(event.target.value)  
        }
        else if (event.target.name == 'email') {
            console.log("email is ",event.target.value);
            setEmail(event.target.value)  
        }
        else{
            console.log(event.target.value);
        }
        // console.log(event.target.type);
    }
    const RegisterUser =async()=>{
        const res = await fetch('http://localhost:5000/users/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:name,
                phone:phone,
                email:email,
                password:password,
                isAdmin:CheckBox
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
    <div>
          <div className="flex justify-center bg-slate-950 " style={{width:"100%",height:"100vh"}}>
<div className="flex md:flex-row flex-col justify-center max-w-7xl m-4 ">
    <div className="lg:w-1/2 bg-black ">
        <div className="flex justify-center flex-col items-center">
            <div className="text-white m-6 text-xl z-200"> Minor Project </div>
            <div className="text-white m-6 z-200"> We are always here to help out whatever way we can :) </div>
            <div className="text-white m-6 z-200">
                {message!=undefined?<p className='text-red-500'>{message}</p>:""}
                <div className="flex m-2">
                    <ion-icon name="person-outline" className="m-2"></ion-icon> <input placeholder="Name" name='name'
                        className="bg-gray-800 p-2 rounded-3xl"  onChange={handleChange}/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="mail-outline" className="m-2"></ion-icon> <input placeholder="E-mail" name='email'
                        className="bg-gray-800 p-2 rounded-3xl"  onChange={handleChange}/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="call-outline" className="m-2"></ion-icon> <input placeholder="Phone" name='phone'
                        className="bg-gray-800 p-2 rounded-3xl"  onChange={handleChange}/>
                </div>
                <div className="flex m-2">
                    <ion-icon name="create-outline" className="m-2"></ion-icon> <input name='password'
                        placeholder="Password" className="bg-gray-800 p-2 rounded-3xl"  onChange={handleChange}/>
                </div>
                <div className="block m-2justify-center">
                    <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer " onClick={()=>RegisterUser()}>
                        <div className="flex justify-center"> Create </div>
                    </div>
                </div>
                <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleCheckbox}/>
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are you a Faculty??</label>
</div>
                <Link href={'/validation/Login'}>
                <p className='text-center my-8'>Already a memeber Login now</p>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-3/4 lg:w-2/3 ">
        <div className="w-3/4 lg:w-1/2 overflow-contain h-min"> <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin"
                width="375" height="667" style={{border:"0px"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Register
