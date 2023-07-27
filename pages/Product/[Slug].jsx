import React, { useEffect, useState } from 'react'
import Items from './Items'
import Grid from './Grid'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Product = () => {
    const router = useRouter()
    const {Slug} = router.query
    console.log(Slug);
    const [Data, setData] = useState({})
    const GetProduct = async()=>{
        console.log("i come");
        if (Slug!=undefined) {
            
        
        const res = await fetch(`http://localhost:5000/products/find/${Slug}`,{
          method:"GET",
          headers:{
              'Content-Type': 'application/json'
          },
      })
      const data = await res.json()
      console.log(data);
      if (data.success == true) {
      setData(data.product)
      }
      else if (data.success == false) {
        router.push('/')
      }
    }
    console.log("reload data");
      }
      
    useEffect(() => {
        console.log("useeffet run");
GetProduct()
    }, [])
    
    return (
        <div style={{minHeight:"100vh",width:"100%"}}>
            <div className="flex justify-center bg-gray-900 text-gray-300 " >
                <nav className="self-center w-full max-w-7xl  ">
                    <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
                        <h1 className=" py-4 text-2xl font-sans font-bold px-10">{Data?Data.title:"Unkown Project"}</h1>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center flex-col flex-wrap  bg-slate-950 p-5 md:p-16 lg:p-28" style={{width:"100%",minHeight:"100vh"}}>
                <div className="flex flex-col justify-center  max-w-7xl  text-gray-400" style={{height:"80vh"}}>
                    <h1 className="text-base font-medium tracking-wider ">Welcome to my Minor Project </h1>
                    <span className="underline underline-offset-2 text-gray-200 -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; </span>
                    <div className="flex flex-col text-white mt-5">
                        <h1 className="text-4xl md:text-[50px] font-semibold">{Data?Data.title:"Ecommerce Project"}</h1>
                        <p className="text-xl mt-2 md:mt-4 tracking-wide">{Data?Data.skills:"MERN Stack"}</p>
                    </div>
                    <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">{Data?Data.desc:"Unkown ProjectTailblocks provides best Tailwind CSS components. Visit our website and feel free togive feedback. With the help of Tailblocks, a user can"}</p>
                    <div className="flex mt-10 space-x-5">
                        {/* https://github.com/ShahSujal/ShahSujal */}
                        <Link href={'https://github.com/ShahSujal/ShahSujal'}>
                        <button className="bg-black text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">GITHUB</button>

                        </Link>
                        <button
                            className="bg-blue-900 text-white border-2 border-black px-6 py-2 hover:brightness-105 font-semibold">Linkedin</button>

                    </div>
                </div>
                <Items item={Data}/>
                <Grid/>
            </div>

        </div>
    )
}

export default Product
