import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ItemMap = ({item,image}) => {
  console.log(item);
  return (


<div className="flex flex-col items-center justify-center p-2 text-gray-300 my-5" style={{width:"400px",height:"400px"}}>
        {image?<Image src={image.image} width={300} height={300} style={{width:"220px",height:"220px",borderRadius:"22px"}} alt='no image' priority={true}/>:"no image"}
        <Link href={`/Product/${item._id}`}>
        <div className="font-bold text-lg m-2 "> <p>{item.title}</p></div>
        </Link>
        <div className=" m-2 text-sm"><p>Skills :-{item.skills}</p></div>
        <div className=" m-2 text-sm"><p>Desc :- {item.desc}</p></div>
        </div>
  )
}

export default ItemMap
