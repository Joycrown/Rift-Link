import React from 'react';
import {useNavigate} from 'react-router-dom';
import icon from '../../images/Frame 1863.png';
import icon1 from '../../images/Frame 1860.png';
import icon2 from '../../images/Frame 1858.png';



function Three(){

    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/signin`; 
        navigate(path);}

    return(
        <section className= '' id=''>
            <div className = 'section-3H'>
                <div className = 'pt-5 pb-3'>
                    <h1 className = 'how how-tab how-mob text-center text-white'>How It Works</h1>
                </div>
                <div className = 'container pt-2 pb-5'>
                    <div className = 'row'>
                        <div className ='col-lg-4 col-md-4 pb-5 space-mob'>
                            <div className ='text-center text-white'>
                                <img src = {icon} alt ='icon' className = 'pb-1 how-icon-mob'/>
                                <h4 className = 'how-subtext how-subtext-tab how-subtext-mob text-center'>Step One</h4>
                                <h4 className = 'how-subtext how-subtext- how-subtext-mob'>
                                Create and fund a Metatrader<br/> 4 or 5 
                                account with a <br/>minimum capital of $100</h4>
                            </div>
                        </div>
                        <div className ='col-lg-4 col-md-4 space-mob'>
                            <div className ='text-center text-white'>
                                <img src = {icon1} alt ='icon' className = 'pb-2 how-icon-mob'/>
                                <h4 className = 'how-subtext how-subtext-tab how-subtext-mob text-center'>Step Two</h4>
                                <h4 className = 'how-subtext how-subtext-tab how-subtext-mob'>
                                Select a Rift Link package,<br/> upload
                                your Metatrader <br/>details and  deploy </h4>
                            </div>
                        </div>
                        <div className ='col-lg-4 col-md-4'>
                            <div className ='text-center text-white'>
                                <img src = {icon2} alt ='icon' className = 'pb-2 how-icon-mob'/>
                                <h4 className = 'how-subtext how-subtext-tab how-subtext-mob text-center'>Step Three</h4>
                                <h4 className = 'how-subtext how-subtext-tab how-subtext-mob'>
                                Sit back and enjoy daily automated income. </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = ''>
                <div className = 'sub-section-head text-center pt-5'>
                    <h1 className = 'sub-section-head-text sub-section-head-text-tab sub-section-head-text-mob '>What Makes Rift Link<br/> Different ?</h1>
                    <h3 className = 'sub-section-head-subtext sub-section-head-subtext-tab sub-section-head-subtext-mob pt-1 pb-5'>Our  P. A. C. T.</h3>
                </div>
                <div className = 'sub-section3H sub-section3H-mob'>
                    <div className = 'pact-1 pact-1-mob'>
                        <div className = 'container d-flex justify-content'>
                            <div className = 'card card-tab card-mob'>
                                <div className = 'card-body text-center'>
                                    <h3 className = 'card-text-head card-text-head-tab card-text-head-mob'><b>Profitability</b></h3>
                                    <h3 className = 'card-text card-text-tab card-text-mob'>Our goal is to help as many as possible become 
                                    profitable on the forex market with or without 
                                    the technical skill required.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'pact-2 pact-2-tab pact-2-mob'>
                        <div className = 'container pt-5 d-flex justify-content-end'>
                            <div className = 'card2 card2-tab card2-mob'>
                                <div className = 'card-body text-center'>
                                    <h3 className = 'card-text-head card-text-head-tab card-text-head-mob'><b>Accessibility</b></h3>
                                    <h3 className = 'card-text card-text-tab card-text-mob'> We aim to be fully accessible to anyone 
                                    anywhere across the globe. It is our belief that income 
                                    generation is for everyone.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'pact-1 pact-1-mob'>
                        <div className = 'container pt-5 d-flex justify-content-start'>
                            <div className = 'card2 card-tab card-mob'>
                                <div className = 'card-body text-center'>
                                    <h3 className = 'card-text-head card-text-head-tab card-text-head-mob'><b>Consistency</b></h3>
                                    <h3 className = 'card-text card-text-tab card-text-mob'>Consistency in income generation is a vital key to 
                                    financial stability and eventually, financial freedom.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'pact-2 pact-2-tab pact-2-mob'>
                        <div className = 'container pt-5 d-flex justify-content-end'>
                            <div className = 'card2 card2-tab card2-mob'>
                                <div className = 'card-body text-center'>
                                    <h1 className = 'card-text-head card-text-head-tab card-text-head-mob'><b>Transparency</b></h1>
                                    <h3 className = 'card-text card-text-tab card-text-mob'>Every activity carried out through the Rift Link 
                                    software is completely transparent and visible to all, there are no hidden activities.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'pt-5 text-center'>
                    <p className = 'pact-text pact-text-tab pact-text-mob'>With these four pillars, our mission is to help you and many 
                    others build<br/> more efficient sources of passive income.</p>
                    <p className = 'pt-2 pact-text pact-text-tab pact-text-mob'>Don't just take our word for it,<br/>
                    Try out the Rift Link software for free and decide for yourself. </p>
                </div>
                <div className = 'd-flex justify-content-center pt-3 pb-5'>
                    <button type="button" onClick={routeChange} class="sub-btn2 sub-btn2-tab sub-btn2-mob btn btn-info text-white text-center">START MY FREE TRAIL</button>
                </div>
            </div>
        </section>
        
    )
}



export default Three;