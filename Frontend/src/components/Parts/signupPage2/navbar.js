import React from 'react';
import logo from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Asset 3@4x 1.png';



function Navbar(){
    return(
       <section className = ''>
           <nav className="navbar navbar-expand-lg navbar-dark navbg fixed-top shadow">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="LOGO" className = 'logo-top logo-top-tab logo-top-mob'/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  nav-links nav-links-tab">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white" href="#">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">About</a>
                        </li>
                        <li className="nav-item nav-move">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-tab nav-link-mob text-white">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </section>
    );
}


export default Navbar;