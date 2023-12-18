import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./images/logo2.png";
import "./style.css";

function Navbar() {
    let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("onClick", function(){
        navCollapse.classList.remove("show");
    })
})
    return (
        <>

            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">
                <img src={Logo} className=" logo nav-logo" alt="logo"/>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav'>
                            <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/Menu">Menu</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/About">About</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/Contact">Contact</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/Login">Login</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/Sign">Sign</Link></li>
                         </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
