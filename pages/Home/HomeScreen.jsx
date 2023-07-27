import React from 'react'
import Navbar from '../other/Navbar'
import Section1 from '../sections/Section1'
import Footer from '../other/Footer'

const HomeScreen = () => {
    return (
        <div>
            <div className="flex justify-center bg-black h-full">
              <Navbar/>
            </div>
            <div className="flex justify-center bg-black p-8 " style={{height:"100vh",width:"100%"}}>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                        <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
                            <div className="text-5xl md:text-7xl font-bold uppercase">
                                 Project Manager </div>
                            <div style={{fontSize:"26px"}}>
                                -Organize your project on your finger-tips </div>
                            {/* <div className="text-xl md:text-3xl   ">
                                Yash Raj Nigam & Taniskha Kalra</div> */}
                        </div>
                        <div className="flex space-x-2 md:space-x-6 md:m-4">

                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?wallpaper" className="h-full w-full" alt=""/>
                            </div>
                            <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/200x400/?code" className="h-full w-full" alt=""/>

                            </div>
                            <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?nature" className="h-full w-full" alt=""/>

                            </div>
                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?tech" className="h-full w-full" alt=""/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
           <Section1/>
           <Footer/>
        </div>
    )
}

export default HomeScreen
