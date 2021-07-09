import React from 'react'
import Navbar from '../Login/Navbar'
import AdminForm from './AdminForm'
import './Admin.scss'

const Admin = () => {
    return (
        <div>
            <Navbar/>
            <div className='admin-container' >
                <AdminForm/>
            </div>
        </div>
    )
}

export default Admin
