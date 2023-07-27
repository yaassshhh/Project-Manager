import React,{useState} from 'react'
import { useRouter } from 'next/router'
const DataUpload = () => {
    const router = useRouter()
    const {Slug} = router.query
    const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          console.log(i);
          setImage(i);
        }
      };
      const SubmitChanges =()=>{
        router.push('/')
      }
    
      const uploadToResearchPaper = async (event) => {
        const body = new FormData();
        body.append("document", image);
        // http://localhost:5000/products/6444aaf4f3ddd04e899e8cb4/upload/report
        const response = await fetch(`http://localhost:5000/products/${Slug}/upload/researchPaper`, {
          method: "PUT",
          body
        });
        console.log(response);
      };
      const uploadToReport = async (event) => {
        const body = new FormData();
        body.append("document", image);
        // http://localhost:5000/products/6444aaf4f3ddd04e899e8cb4/upload/report
        const response = await fetch(`http://localhost:5000/products/${Slug}/upload/report`, {
          method: "PUT",
          body
        });
        console.log(response);
      };
      const uploadToSynopsis = async (event) => {
        const body = new FormData();
        body.append("document", image);
        // http://localhost:5000/products/6444aaf4f3ddd04e899e8cb4/upload/report
        const response = await fetch(`http://localhost:5000/products/${Slug}/upload/synopsis`, {
          method: "PUT",
          body
        });
        console.log(response);
      };

  return (
    <div className="flex justify-center flex-col   bg-zinc-800" style={{height:"100vh",width:"100%"}}>
   <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center m-2">
   <div
           className="bg-gray-900 m-4 shadow-xl min-h-96 flex flex-col justify-center text-slate-400 hover:text-white hover:bg-gray-700 hover:scale-105 ">
           <div className="m-8 h-96">
               <div className=" m-2">Synopsis</div>
               <div className=" m-2 text-3xl">Upload</div>
               <div className=" m-2 mt-8">Your Project Synopsis</div>
              
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">It's easy to upload only  </div>
               </div>
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">click on upload and browse your file </div>
               </div>
           </div>
           <input type='file' onChange={(e)=>{uploadToClient(e)}} placeholder='upload report '/>
           <div className="flex justify-center">
               <div
                   className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium" onClick={()=>uploadToSynopsis}>
                   Synopsis</div>
           </div>
       </div> <div
           className="bg-gray-900 m-4 shadow-xl min-h-96 flex flex-col justify-center text-slate-400 hover:text-white hover:bg-gray-700 hover:scale-105 ">
           <div className="m-8 h-96">
               <div className=" m-2">Report</div>
               <div className=" m-2 text-3xl">Upload</div>
               <div className=" m-2 mt-8">Your Project Report</div>
              
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">It's easy to upload only  </div>
               </div>
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">click on upload and browse your file </div>
               </div>

           </div>
               <input type='file' onChange={(e)=>{uploadToClient(e)}} placeholder='upload report '/>
           
           
           <div className="flex justify-center">
               <div
                   className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium" onClick={()=>uploadToReport}>
                Report</div>
           </div>
       </div> <div
           className="bg-gray-900 m-4 shadow-xl min-h-96 flex flex-col justify-center text-slate-400 hover:text-white hover:bg-gray-700 hover:scale-105 ">
           <div className="m-8 h-96">
               <div className=" m-2">Research Paper</div>
               <div className=" m-2 text-3xl">Upload</div>
               <div className=" m-2 mt-8">Your Project Research Paper</div>
              
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">It's easy to upload only  </div>
               </div>
               <div className="flex">
                   <ion-icon name="close-circle-outline" className="m-1 text-red-500"></ion-icon>
                   <div className="">click on upload and browse your file </div>
               </div>
           </div>
           <input type='file' onChange={(e)=>{uploadToClient(e)}} placeholder='upload data'/>
           <div className="flex justify-center">
               <div
                   className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium" onClick={()=>{uploadToResearchPaper()}}>
                   Research Paper</div>
           </div>
       </div>
       
   </div>
   <div className="flex mx-auto justify-between">

   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-12" onClick={()=>SubmitChanges()}>
  Done EveryThing Let's go
</button>
</div>
</div>

  )
}

export default DataUpload
