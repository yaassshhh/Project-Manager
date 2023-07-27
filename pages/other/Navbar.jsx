import React, { useContext } from 'react'
import Link from 'next/link'
import { MinorContext } from '../../context/Context'
const Navbar = () => {
    const context = useContext(MinorContext)
    const {user} = context
  return (
    <nav className=" bg-slate-950 " style={{width:"100%"}}>
    <div className="flex flex-col lg:flex-row justify-around items-center text-white ">
        <h1 className="uppercase pl-5 py-4 mx-3 text-lg font-sans font-bold">Project Manager</h1>

        <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
            <div className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href={'/'}>
                <p>Home</p>
                </Link>
            </div>
          {
            user?user.isAdmin==true?<li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
            <Link href={'/Projects/Projects'}>
        <p>Projects</p>
        </Link></li>:<li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href={'/Upload/Upload'}>
                <p>Create</p></Link>
            </li>:<></>
          }
            
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><p
                href="#">About</p></li>
            <Link href={'/Profile/Profile'}>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><p
                href="#">Profile</p></li>
            </Link>
        </ul>
</div>
</nav>
  )
}

export default Navbar
