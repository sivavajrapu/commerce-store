import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../../constants';

export default function ProductDetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [searchTerm , setSearchTerm] = useState("")

  useEffect(()=>{
    axios.get(`${BASE_URL}/products/category/${location?.state?.name}`)
    .then((res)=>{setData(res?.data); console.log(JSON.stringify(res.data))})
    .catch((err)=>console.log(JSON.stringify(err)))
  },[])

 const addToCart = () =>{
  window.alert("Item Added to cart")
 }
  return (
    <div>
      <input type="text" placeholder="search" onChange={(e)=>setSearchTerm(e.target.value)} className="w-[80%] ml-[5%] mt-3 h-11 px-2"/>
          <div className='text-lg'>
            Results for {location?.state?.name}
          </div>
          <div className='flex gap-8 mt-4'>
            {data?.filter((value)=>{
              if(searchTerm === ""){
                return value;
              } else if(
                value.title.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return value
              }
            }).map((item,i)=>{
              return(
                <div key={i} className="bg-white rounded-md drop-shadow-md bg-clip-padding py-4 px-4 w-[250px]">
                     <div>
                       <img src={item.image} className="w-40 h-28 mb-2"/>
                       <p className='truncate w-40 text-lg text-red-800 font-bold'>{item.title}</p>
                       <p className='text-sm'>
                        <span className='font-semibold'>Price :</span>  {item.price}
                       </p>
                       <p className='text-sm'>
                        <span className='font-semibold'>Rating :</span>  {item.rating.rate}
                       </p>
                       <p className='text-sm'>
                        <span className='font-semibold'>Description :</span>  {item.description}
                       </p>
                       <button className='bg-yellow-300 mt-4 px-3 rounded' onClick={()=>addToCart()}>Add to cart</button>
                     </div>
                </div>
              )
            })}
          </div>
    </div>
  )
}
