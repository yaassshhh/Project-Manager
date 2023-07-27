import React from 'react'

const Grid = () => {
    return (
        <div style={{height:"100vh",width:"100%"}} className='align-center flex justify-center'>
            <div className="flex justify-center  ">
                <div className="flex flex-col md:flex-row space-y-2  items-center justify-center max-w-7xl w-full p-4">
                    <div className="w-full md:w-1/2 mx-2 h-96  overflow-hidden  ">
                        <img src="https://source.unsplash.com/random/500x500/?code" alt="" className="h-full w-full" />

                    </div>
                    <div className="w-full md:w-1/2 mx-2 h-96 ">
                        <div className="flex flex-col space-y-2">
                            <div className="h-48 w-full   overflow-hidden  ">
                                <img src="https://source.unsplash.com/random/300x200/?code" alt="" className="h-full w-full" />

                            </div>
                            <div className="h-48 w-full flex space-x-1 p-2">
                                <div className="h-full w-1/2 overflow-hidden  ">
                                    <img src="https://source.unsplash.com/random/200x200/?code" alt="" className="h-full w-full" />

                                </div>
                                <div className="h-full w-1/2  overflow-hidden  ">
                                    <img src="https://source.unsplash.com/random/200x200/?code" alt="" className="h-full w-full" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
