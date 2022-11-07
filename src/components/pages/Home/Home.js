import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Helpers/Spinner/Spinner';
export default function Home() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${BASE_URL}/users`)
            .then((res) => { setLoader(false); setData(res?.data); console.log(JSON.stringify(res?.data)) })
            .catch((err) => console.log(JSON.stringify(err)))
    }, [])

    const productDetails = (e) => {
        navigate('/product_detail', {
            state: {
                name: e
            }
        })
    }
    return (
        <div className='bg-slate-300 h-screen'>
            {
                loader === true ?
                    <Spinner /> :
                    <div >
                        {data.map((item, i) => {
                            return (
                                <div key={i} className='card rounded-none mx-2 mb-2 flex'>
                                    <div>
                                        <img src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`} className="w-[150px] h-[150px]"/>
                                    </div>
                                    <div className='ml-4'>
                                        <p className='text-xl font-semibold'>{item.name}</p>
                                        <p className='text-sm font-bold'>Email: <span className='font-normal'>{item.email}</span></p>
                                        <p className='text-sm font-bold'>Phone: <span className='font-normal'>{item.phone}</span></p>
                                        <p className='text-sm font-bold'>Company: <span className='font-normal'>{item.company.name}</span></p>
                                        <p className='text-sm font-bold'>Website: <span className='font-normal'>{item.website}</span></p>
                                        <p className='text-sm font-bold'>Address: <span className='font-normal'>{item.address.street},{item.address.suite},{item.address.zipcode}</span></p>
                                    </div>

                                </div>

                            )
                        })}
                    </div>
            }

        </div>
    )
}
