import React from 'react'
import { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'


const linkTree= [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
  {
    id: 2,
    name: "About",
    href: "/about"
  },
  {
    id :3,
    name: "Products",
    href: "/products"
  }
]

const Header = () => {

  
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="logo">logo </NavLink>
             
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {linkTree.map((link)=>{
                    return(
                      <li key={link.id}>
                        <NavLink className="nav-link"  to={link.href}>{link.name} </NavLink>
                      </li>
                    )
                  })}
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="text-center">MyFakeStore.com</h1>
    </header>
  )
}

export default Header
        
      