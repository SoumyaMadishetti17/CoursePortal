import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav=useNavigate()

  return (
    <div>
        <nav>
            <div onClick={()=>nav('/')}>Home</div>
            <div onClick={()=>nav('/courses')}>Courses</div>
            <div onClick={()=>nav('/assignments')}>Assignments</div>
            <div onClick={()=>nav('/profile')}>Profile</div>
            <div onClick={()=>nav('/gradedashboard')}>GradeDashboard</div>
        </nav>
    </div>
  )
}

export default Navbar