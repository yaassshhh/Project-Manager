import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const MinorContext = createContext();

const Context = ({ children }) => {
 const router = useRouter()
  const [contextData, setContextData] = useState([]);
  const [user,setUser] = useState({})
useEffect(() => {
GetAllProducts()
}, [])

const GetAllProducts = async()=>{
  const res = await fetch('http://localhost:5000/products/',{
    method:"GET",
    headers:{
        'Content-Type': 'application/json'
    },
})
const data = await res.json()
console.log(data);
if (data.success == true) {
setContextData(data.product)
}
else if (data.success == false) {
}
}

  return (
    <MinorContext.Provider value={{ user,setUser,contextData,setContextData}}>
      {children}
    </MinorContext.Provider>
  );
};
export default Context;
