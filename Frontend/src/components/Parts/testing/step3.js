import React from 'react'
import Navbar from '../signupPage/navbar';
import {useNavigate} from 'react-router-dom';
import handspoint from '../../images/Hands Point.png';
import './signup3.css'





function StepThree (){

    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/signin`; 
        navigate(path);}
   
    return(
        <section className = ''>
            <Navbar/>
            <div className='signup3-desktop'>
                <div className = 'bg-signin vh-100'>
                    <div className = 'signin-desktop'>
                        <div className = 'd-flex justify-content-around signin-move'>
                            <div className = 'signin-move'>
                                <h2 className = 'su-wel-text text-white'>Congratulations!!!!</h2>
                            </div>
                            
                            <div className = 'signup-card'>
                                    <div className= 'card-si'>
                                        <div className = 'card-body'>
                                            <div className = 'container text-center'>
                                                <img src= {handspoint} alt='icon' className='pt-5'/>
                                            </div>
                                            <div className='pt-3 pb-3 text-center'>
                                                <h3 className='head-text'>Welcome to the winning team </h3>
                                            </div>
                                            <div className='text-center pt-2 pb-2'>
                                                <p className='su3-head-text'>You have taken the first step on the path of <b>Income Automation</b> 
                                                    <b> We have sent you a confirmation mail</b> 
                                                </p>
                                            </div>
                                            <div className='text-center pb-5'>
                                                 <button type="submit"  onClick={routeChange} class="btn sign-btn sign-btn-tab btn-primary">GO TO LOGIN</button>
                                            </div>
                                        </div>   
                                    </div>
                                    <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        {/* tablet & mobile */}
        <div className='signup3-tab'>
           <div className='bg-signin vw-100'>
               <div className=''>
                    <div className = 'su3head-text-tab'>
                        <h2 className = 'su3-wel-text-tab su3-wel-text-mob text-white'>Congratulations!!!!</h2>
                     </div>
                     <div className='d-flex justify-content-center'>
                        <div className = 'signup3-card-tab'>
                            <div className= 'card-si'>
                                <div className = 'card-body'>
                                    <div className = 'container text-center'>
                                        <img src= {handspoint} alt = 'icon' className=' su3-image-tab su3-image-mob'/>
                                    </div>
                                    <div className='pt-4 pb-3 text-center'>
                                        <h3 className='head-text-tab head-text-mob'>Welcome to the winning team </h3>
                                    </div>
                                    <div className='text-center pt-2 pb-2'>
                                        <p className='su3-head-text-tab su3-head-text-mob'>You have taken the first step on the path of <b>Income Automation</b> 
                                            <b> We have sent you a confirmation mail</b> 
                                        </p>
                                    </div>
                                    <div className='text-center pb-5'>
                                            <button type="submit"  onClick={routeChange} class="btn sign-btn sign-btn-tab btn-primary">GO TO LOGIN</button>
                                    </div>
                                </div>   
                            </div>
                            <p className = 'pt-4 pb-5 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                        </div>
                     </div>
                    
               </div>

           </div>
        </div>
            {/* mobile */}
            
        </section>
    )
}


export default StepThree;