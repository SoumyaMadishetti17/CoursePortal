import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Assignments from './components/Assignments'
import Courses from './components/Courses'
import GradeDashboard from './components/GradeDashboard'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/assignments' element={<Assignments/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/gradedashboard' element={<GradeDashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App