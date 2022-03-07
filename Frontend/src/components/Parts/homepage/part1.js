import React from 'react'
import { Link,useNavigate} from 'react-router-dom';
import logo from '../../images/Asset 3@4x 1.png';


function One(){
    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/signin`; 
        navigate(path);}
   
    return(
        <section className = 'part-1' id = 'blog'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link class="navbar-brand" to ={'/'}>
                    <img src={logo} alt="LOGO" className = 'logo-top logo-top-tab logo-top-mob'/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  nav-links nav-links-tab">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to = {'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to = {'/'}>Packages</Link>
                        </li>
                        <li className="nav-item">
                            <scrollink spy={true} smooth={true} offset = {50} duration={500}className="nav-link nav-link-tab nav-link-mob text-white" to ='About'>About</scrollink>
                        </li>
                        <li className="nav-item nav-move">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to = {'/'}>Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-tab nav-link-mob text-white" to = {'/signin'}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className= 'background-head vh-100' id = ' '>
            <div className = 'heading heading-tab'>
                <h1 className = 'text-heading text-heading-tab text-heading-mob text-white'> Automate Your<br/>     Income</h1>
                <h3 className = 'sub-text-home sub-text-tab sub-text-mob text-white pt-3'>Earn daily consistent profits with our<br/>
                 powerful copytrading software</h3>
                 <div className = 'pt-3'>
                    <button type="button" onClick={routeChange} class="sub-btn sub-btn-tab sub-btn-mob btn btn-info text-white text-center">TRY IT FOR FREE</button>
                </div>
            </div>
        </div>
        <div className = 'background-head-mob vh-100' id = ' '>
            <div className = 'heading-mob'>
                <h1 className = 'text-heading-mob text-white'> Automate <br/> Your <br/>     Income</h1>
                <h3 className = 'sub-text-mob text-white pt-3'>Earn daily consistent profits with our<br/>
                 powerful copytrading software</h3>
                 <div className = 'pt-3'>
                    <button type="button" onClick={routeChange} class="sub-btn-mob btn btn-info text-white text-center">TRY IT FOR FREE</button>
                </div>
            </div>
        </div>
    </section>
    );
}



export default One;