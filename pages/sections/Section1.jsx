import React from 'react'

const Section1 = () => {
    return (
        <div>
            <div className="flex justify-center   p-8 bg-slate-950" style={{width:"100%",height:"100vh"}}>
                <div className="flex flex-col justify-center" >

                    <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
                        <div className="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
                            <div className="flex flex-col items-start space-y-3">
                                <div className="text-3xl md:text-5xl font-bold px-8 text-slate-200">
                                    Project is a first journey of </div>
                                <div className="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                                    CODER </div>
                                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
                            </div>
                            <button className="">
                                <ion-icon name="caret-forward-outline"
                                    className="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500">
                                </ion-icon>
                            </button>
                        </div>
                        <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">

                            <div className=" w-96 h-60 lg:h-96  overflow-hidden ">
                                <img src="https://source.unsplash.com/300x400/?computer" className="h-full w-full" alt=""/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
