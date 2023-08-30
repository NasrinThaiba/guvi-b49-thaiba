import React from 'react'
import AllCourses from './AllCourses.jsx'
import FullStackDevelopment from '../FullStackDevelopment.jsx'
import DataScience from '../DataScience.jsx'
import CyperSecurity from '../CyberSecurity.jsx'
import Career from '../Career.jsx'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import './index.css'

function App() {
  return (
    <>
    <Router>
      <div>
        <nav className='navigation'>
          <ul>
            <li><Link to="/" className="nav-link">All Courses</Link></li>
            <li><Link to="/FullStackDevelopment" className="nav-link">Full Stack Development</Link></li>
            <li><Link to="/DataScience" className="nav-link">Data Science</Link></li>
            <li><Link to="/CyperSecurity" className="nav-link">Cyper Security</Link></li>
            <li><Link to="/Career" className="nav-link">Career</Link></li>
          </ul>
        </nav>
        
        <div className="app">
        <Routes>
          <Route path="/" exact Component = {AllCourses}></Route>
          <Route path="/FullStackDevelopment" Component = {FullStackDevelopment}></Route>
          <Route path="/DataScience" Component = {DataScience}></Route>
          <Route path="/CyperSecurity" Component = {CyperSecurity}></Route>
          <Route path="/Career" Component = {Career}></Route>
        </Routes>
      </div>
      </div>
    </Router>
      
    </>
  )
}

export default App
