import React, { useContext, useState } from 'react'
import Image from 'next/image'
import ItemMap from './ItemMap'
import Navbar from '../other/Navbar'
import SearchBox from '../other/SearchBox'
import { MinorContext } from '../../context/Context'
const Projects = () => {
  const [ArrayData,setArrayData] = useState([
    {
     key:1,
     image:"https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
     key:2,
     image:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
     key:3,
     image:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
     key:4,
     image:"https://images.unsplash.com/photo-1530825894095-9c184b068fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
    },
    {
     key:5,
     image:"https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
     key:6,
     image:"https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
     key:7,
     image:"https://images.unsplash.com/photo-1551281306-0d52288970ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    },
    {
     key:8,
     image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    },
    {
     key:9,
     image:"https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
     key:10,
     image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
  ])
  
  const context = useContext(MinorContext)
  const {contextData} = context
  return (
    <div className="flex justify-center flex-col bg-slate-950" style={{width:"100%",minHeight:"100vh",alignItems:"center"}}>
      <Navbar/>
      <div className='flex items-center justify-between p-7' style={{width:"100%"}}>

      <h1 className='text-slate-200' style={{fontSize:"21px",margin:"40px",letterSpacing:"2px"}} >Projects All Listed</h1>
      <SearchBox/>

      </div>
<div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full" style={{width:"100%",minHeight:"100vh"}}>
    {
contextData.length>0?contextData.map((item)=>{
  return<div key={item._id} >
    <ItemMap item={item} image={ArrayData[Math.floor(Math.random()*10)]}/>
  </div>
}):<h2>No data</h2>
    }
</div>
</div>
  )
}

export default Projects
