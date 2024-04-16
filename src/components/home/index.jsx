import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Navbar from "../navbar/Navbar";


const Home = () => {
    const { currentUser } = useAuth()
    
    return (
        <div>
            <Navbar/>
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
        </div>
    )
    
}

export default Home