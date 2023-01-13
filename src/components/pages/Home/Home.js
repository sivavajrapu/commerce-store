import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import banner from '../../Assets/banner.jpg';
import body from '../../Assets/body1.jpg';
import body2 from '../../Assets/body2.jpg';
import body3 from '../../Assets/body3.jpg';
import footer from '../../Assets/footer.jpg';
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
                        <img src={banner} style={{width:"100%"}}/>
                    </div>
                    <div>
                    <img src={banner} style={{width:"100%"}}/>
                    </div>
                    <div>
                    <img src={banner} style={{width:"100%"}}/>
                    </div>
                    <div>
                    <img src={banner} style={{width:"100%"}}/>
                    </div>
                </Carousel>
            </div>
            {/* <div className='flex justify-center mt-4 bg-red-200 h-40'>
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
            </div> */}
             <div className='flex justify-center items-center  bg-red-200 '>
            <img src={body} style={{width:"100%"}}/>
            </div>
            <div className='flex justify-center items-center  bg-red-200 '>
            <img src={body2} style={{width:"100%"}}/>
            </div>
            <div className='flex justify-center items-center  bg-red-200'>
            <img src={body3} style={{width:"100%"}}/>
            </div>
            <div className='flex justify-center items-center  bg-red-200 '>
            <img src={footer} style={{width:"100%"}}/>
            </div>
        </div>
    )
}
