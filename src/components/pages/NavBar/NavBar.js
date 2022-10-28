import React from 'react'
import cart from '../../Assets/cart.png'
import profile from '../../Assets/profile.png'
import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <div className='bg-yellow-300 shadow-sm rounded-sm'>
            <div className='flex items-center justify-between px-2 py-2'>
                <Link to='/'>My Bazzar</Link>
                
                <div className='flex items-center space-x-4'>
                    <Link to={'/cart'}>
                    <img src={cart} alt='cart.png' className={'w-[30px] h-[30px]'} />
                    </Link>
                    <Link to={'/myProfile'}>
                    <img src={profile} alt="profile.png" className={'w-[30px] h-[30px] cursor-pointer'} />
                    </Link>
                </div>

            </div>
        </div>
    )
}
