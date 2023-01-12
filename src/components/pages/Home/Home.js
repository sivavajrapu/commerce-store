import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import { Carousel } from 'antd';
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const DATA = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        name: "SBI PO"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        name: "SBI PO"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        name: "SBI PO"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        name: "SBI PO"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
        name: "SBI PO"
    }

]
export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <div>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>content slide 1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>content slide 2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>content slide 3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>content slide 4</h3>
                    </div>
                </Carousel>
            </div>
            <p className='text-center text-2xl'>All Categories</p>
            <div className='flex justify-center mt-4 bg-red-200 h-40'>
                {DATA.map((item, i) => {
                    return (
                        <div style={{width:"100px", height:"100px", marginTop:"20px",backgroundColor:"white", display:"flex", justifyContent:"center",marginRight:"20px", alignItems:"center", borderRadius:"5px"}}>
                            <div key={i} style={{justifyContent:"center"}}>
                                <img src={item.image} style={{width:"30px", height:"30px",marginLeft:"10px"}} />
                                <p style={{marginTop:"10px"}}>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center items-center mt-2 bg-red-200 h-40'>
               <p className='text-lg'>Space for Add</p>
            </div>
            <div className='flex justify-center items-center mt-2 bg-red-200 h-40'>
               <p className='text-lg'>Space for Blogs and Vlogs</p>
            </div>
            <div className='flex justify-center items-center mt-2 bg-red-200 h-40'>
               <p className='text-lg'>Space for Footer</p>
            </div>
        </div>
    )
}
