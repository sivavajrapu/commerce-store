import React from 'react'
import cart from '../../Assets/cart.png'
import profile from '../../Assets/profile.png'
import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <div className='bg-yellow-300 shadow-sm rounded-sm h-12'>
            <div className='flex items-center justify-between px-2 py-2'>
                <Link to='/home'>Ed tech</Link>
                
                <div className='flex items-center space-x-4'>
                    <Link to={'/home'}>
                    <p>Home</p>
                    </Link>
                    <Link to={'/mock'}>
                    <p>Mock Test</p>
                    </Link>
                    <Link to={'/practice'}>
                    <p>Practice Test</p>
                    </Link>
                    <Link to={'/vacancies'}>
                    <p>Latest Vacancies</p>
                    </Link>
                    <Link to={'/contactUs'}>
                    <p>Contact us</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
