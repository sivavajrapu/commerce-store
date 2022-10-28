import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import {useNavigate} from 'react-router-dom'
export default function Home() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`${BASE_URL}/products/categories`)
        .then((res)=>{setCategories(res?.data)})
        .catch((err)=>console.log(JSON.stringify(err)))
    },[])

    const productDetails = (e) => {
         navigate('/product_detail', {state:{
            name : e
         }})
    }
  return (
    <div>
            <p className='text-center text-2xl'>All Categories</p>
            <div className='flex justify-center mt-4'>
                {categories.map((item,i)=>{
                    return(
                        <div key={i} onClick={()=> {productDetails(item)}}>
                            <div className='w-[200px] bg-orange-400 m-3 px-7 py-7 cursor-pointer'>
                                <p className='text-center'>{item}</p>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}
