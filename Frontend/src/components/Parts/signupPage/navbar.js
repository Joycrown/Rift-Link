import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/Asset 3@4x 1.png';



function Navbar(){
    return(
       <section className = ''>
           <nav className="navbar navbar-expand-lg navbar-dark navbg fixed-top shadow">
            <div className="container">
                <Link class="navbar-brand" to = {'/'}>
                    <img src={logo} alt="LOGO" className = 'logo-top logo-top-tab logo-top-mob'/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  nav-links nav-links-tab">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to={'/packages'}>Packages</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">About</a>
                        </li> */}
                        <li className="nav-item nav-move">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to = {'/'}>Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to ={'/signin'}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </section>
    );
}


export default Navbar;