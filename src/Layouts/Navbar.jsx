import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to = '/' className="Nav_link">Home</NavLink>
            <NavLink to = '/add_page'className="Nav_link">Add_Page</NavLink>
            <NavLink to = '/contact' className="Nav_link">Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar