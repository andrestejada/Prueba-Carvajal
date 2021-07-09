import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../Admin/Admin'
import Users from '../users/Users'


const Dashboard = () => {
    const {user} = useSelector(state => state.auth)
    return (
        <div>
            {
                (user.rol==='admin')
                    ?<Admin/>
                    :<Users/>
            }
        </div>
    )
}

export default Dashboard
