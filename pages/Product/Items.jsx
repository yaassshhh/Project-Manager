import React from 'react'
import Link from 'next/link'
const Items = ({item}) => {
const data = [
    {
        key:"1",
        type:"synopsis",
        image:"",
        link:"",
        publish_at:"Acropolis Institute"
    },
    {
        key:"2",
        type:"Research paper",
        image:"",
        link:"",
        publish_at:"Acropolis Institute"
    },
    {
        key:"3",
        type:"Report",
        image:"",
        link:"",
        publish_at:"Acropolis Institute"
    },
    {
        key:"4",
        type:"Code",
        image:"",
        link:"",
        publish_at:"Acropolis Institute"
    },
]





  return (
    <div className="flex justify-center ">
    <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
        <div className="flex flex-col justify-center items-center ">
            <div className="text-xl md:text-3xl text-orange-500 font-bold uppercase">Download Items</div>
            <div className="border-b-4 border-orange-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
            <div className="text-black text-sm text-center mt-5">Subscribe Download any thing and best of luckkkk
            </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
            <div style={{width:"450px"}}
                className="bg-gray-900 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[100%] lg:w-fit">
                <div className="-mt-20 ">
                <Link href={`http://localhost:5000/images/${item.researchPaper}`}>
                    <img src="https://images.unsplash.com/photo-1520076794559-6a1229412a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="rounded-full " alt="" style={{width:"180px",height:"150px"}}/>
                    </Link>
                </div>
                <p className="text-center text-gray-200 text-sm p-5">Research Paper</p>
                <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                    <h1 className="text-orange-500 text-lg font-semibold">Publish at -</h1>
                    <p className="text-gray-300 text-sm lg:mt-[5px]">Acropolis Institute </p>
                </div>
            </div>
            <div style={{width:"450px"}}
                className="bg-slate-900 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[100%] lg:w-fit">
                <div className="-mt-20 ">
                <Link href={`http://localhost:5000/images/${item.report}`}>
                    <img src="https://images.unsplash.com/photo-1682045324088-ddaf4da1df35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="rounded-full " alt="" style={{width:"180px",height:"150px"}}/>
                    </Link>
                </div>
                <p className="text-center text-sm p-5 text-white">Report</p>
                <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                    <h1 className="text-orange-500 text-lg font-semibold">Publish at -</h1>
                    <p className="text-white text-sm lg:mt-[5px]">Acropolis Institute </p>
                </div>
            </div>
            <div style={{width:"450px"}}
                className="bg-slate-900 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[100%] lg:w-fit">
                <div className="-mt-20 ">
                  <Link href={`http://localhost:5000/images/${item.synopsis}`}>
                  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="rounded-full " alt="" style={{width:"180px",height:"150px"}}/>
                  </Link>
                </div>
                <p className="text-center text-sm p-5 text-white">Synopsis</p>
                <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                    <h1 className="text-orange-500 text-lg font-semibold">Publish at -</h1>
                    <p className="text-white text-sm lg:mt-[5px]">Acropolis Institute </p>
                </div>
            </div>
            
            
        </div>
    </div>
</div> 
  )
}

export default Items
