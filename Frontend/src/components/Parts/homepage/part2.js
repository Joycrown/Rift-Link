import React from 'react';
import {useNavigate} from 'react-router-dom';
import img1 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/unsplash_5DJ0VvLRSFE.png';
import img2 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/unsplash_GzumspFznSE.png';
import img3 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/unsplash_46oLPhFNof8.png';
import img4 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/unsplash_jJFrkJP_-RA.png';
import icon from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Frame 10.png';
import icon1 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Frame 11.png';
import icon2 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Frame 12.png';
import icon3 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Frame 13.png';
import icon4 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Frame 14.png';





function Two(){

    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/signin`; 
        navigate(path);}
    
    return(
        <section className = 'section-2H text center' id=''>
          <div className = 'sec-2H justify-content-center' >
              <h2 className = 'text-heading2 text-heading2-tab text-heading2-mob text-center'>PASSIVE INCOME AT YOUR FINGER TIPS</h2>
              <h3 className = 'sub-text2 sub-text2-tab sub-text2-mob text-center pt-2'>No matter who you are or what you do, you  can step into a <br/> life of automated and secure income</h3>
          </div>
          {/* mobile */}
          <div className = 'section-2H-mob text center' id=''>
            <div className = 'justify-content-center'>
                <h2 className = 'text-heading2-mob text-center'>PASSIVE INCOME AT<br/> YOUR FINGER TIPS</h2>
                <h3 className = 'sub-text2-mob text-center pt-2'>No matter who you are or what you do, you  can<br/> step into a life of automated and secure income</h3>
            </div>
          </div>
          <div className = 'img-slide-des'>
            <div className = 'container pt-5 pb-5 img-slide'>
                <div className = 'row'>
                    <div className = 'col-md-6 col-lg-3'>
                        <img src = {img2} alt = '' className = ''></img>
                    </div>
                    <div className = 'col-md-6 col-lg-3 '>
                        <img src = {img1} alt = '' className = ''></img>
                    </div>
                    <div className = 'col-md-6 col-lg-3'>
                        <img src = {img4} alt = '' className = ''></img>
                    </div>
                    <div className = 'col-md-6 col-lg-3'>
                        <img src = {img3} alt = '' className = ''></img>
                    </div>
                    </div>
                </div>
          </div>
            {/* tablet */}
            <div className = 'img-slide-tab'>
                <div className = 'container pt-5 pb-5 img-slide'>
                    <div className = 'row'>
                        <div className = 'col-md-6 col-lg-3'>
                            <img src = {img2} alt = '' className = ''></img>
                        </div>
                        <div className = 'col-md-6 col-lg-3 '>
                            <img src = {img1} alt = '' className = ''></img>
                        </div>
                        <div className = 'col-md-6 col-lg-3'>
                            <img src = {img4} alt = '' className = 'pt-5'></img>
                        </div>
                        <div className = 'col-md-6 col-lg-3'>
                            <img src = {img3} alt = '' className = 'pt-5'></img>
                        </div>
                        </div>
                    </div>
            </div>
            {/* mobile */}
            <div className = 'img-slide-mob'>
                <div className = 'd-flex justify-content-center'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner text-center ">
                            <div class="carousel-item active">
                                <img src={img2} class="d-block w-70 text-center" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={img1} class="d-block w-70 text-center" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={img4} class="d-block w-70 text-center" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-70 text-center" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className = 'd-flex justify-content-center pt-5 pb-5'>
                <button type="button" onClick={routeChange} class="sub-btn2 sub-btn2-tab sub-btn2-mob btn btn-info text-white text-center">START YOUR 14 DAYS FREE TRAIL</button>
            </div>
            {/* 1 */}
            {/* Desktop */}
            <section id= 'About'>
                <div className = 'why-des' >
                    <div className = 'info pt-5'>
                        <h1 className = 'info-head text-center'>What is Rift Link?</h1>
                    </div>
                    <div className = 'info container d-flex justify-content-evenly'>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon} alt='' className = 'icon icon-mob'></img>
                            </div>
                            <div className = ''>
                                <p className = 'info-text'><b>Rift Link</b> is a cloud-based, third-party<br/> copytrading 
                                platform developed to<br/> help you earn automated and <br/>consistent 
                                income on the forex<br/> market.</p>
                            </div>
                        </div>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon1} alt='' className = 'icon icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text'><b>High Accuracy Trading</b></h3>
                                <p className = 'info-text'>
                                    Daily accurate trades executed by AI<br/> powered trading bots and expert<br/> analysts. 
                                    Eliminating emotion-based <br/>trading.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className = 'info container d-flex justify-content-evenly'>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon2} alt='' className = 'icon icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text'><b>Powerful Copytrading Software</b></h3>
                                <p className = 'info-text'>
                                    Lightening fast copy speed with low <br/>latency, sophiscated risk management protocol
                                </p>
                            </div>
                        </div>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon3} alt='' className = 'icon icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text'><b>Metatrader 4&5 Compatible</b></h3>
                                <p className = 'info-text'>
                                    Rift Link is compatible with any <br/> broker all over the 
                                    world as long as <br/> they offer Metatrader trading<br/> accounts.
                                    </p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className = 'info container d-flex justify-content-evenly'>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon4} alt='' className = 'icon icon-tab icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text'><b>Full Capital Control</b></h3>   
                                <p className = 'info-text'>
                                    Users maintain full control over their <br/>capital.<br/>
                                    Rift Link has no access to<br/> deposit or withdraw on user<br/> account.
                                </p>
                            </div>
                        </div>
                        <div className = 'd-flex justify-content-center'>
                            <div className = ''>
                                <img src = {icon4} alt='' className = 'icon icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text'><b>Full Capital Control</b></h3>
                                <p className = 'info-text'>
                                    Users maintain full control over their<br/> capital.<br/>
                                    Rift Link has no access to <br/>deposit or withdraw on user<br/> account.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tablet */}
                <div className = 'why-tab'>
                    <div className = 'info pt-5'>
                        <h1 className = 'info-head-tab text-center'>What is Rift Link ?</h1>
                    </div>
                    {/* 1 */}
                    <div className = ''>
                        <div className = 'info container d-flex justify-content-evenly'>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <p className = 'info-text-tab'><b>Rift Link</b> is a cloud-based, third-party copytrading 
                                    platform developed to help you earn automated and consistent <br/>
                                    income on the forex market.</p>
                                </div>
                            </div>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon1} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <h3 className = 'info-text-tab'><b>High Accuracy Trading</b></h3>
                                    <p className = 'info-text-tab'>
                                        Daily accurate trades executed by AI powered trading bots and expert analysts. 
                                        Eliminating emotion-based <br/>trading.</p>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className = 'info container d-flex justify-content-evenly'>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon2} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <h3 className = 'info-text-tab'><b>Powerful Copytrading Software</b></h3>
                                    <p className = 'info-text-tab'>
                                        Lightening fast copy <br/>speed with low latency, sophiscated risk management protocol
                                    </p>
                                </div>
                            </div>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon3} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <h3 className = 'info-text-tab'><b>Metatrader 4&5 Compatible</b></h3>
                                    <p className = 'info-text-tab'>
                                        Rift Link is compatible with any<br/> broker all over the 
                                        world <br/>as long as they offer <br/>Metatrader trading <br/>accounts.
                                        </p>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className = 'info container d-flex justify-content-evenly'>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon4} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <h3 className = 'info-text-tab'><b>Full Capital Control</b></h3>   
                                    <p className = 'info-text-tab'>
                                        Users maintain full control<br/> over their capital.<br/>
                                        Rift Link has no access<br/> to deposit or withdraw on user account.
                                    </p>
                                </div>
                            </div>
                            <div className = 'd-flex justify-content-center'>
                                <div className = ''>
                                    <img src = {icon4} alt='' className = 'icon icon-tab icon-mob'></img>
                                </div>
                                <div className = ''>
                                    <h3 className = 'info-text-tab'><b>Full Capital Control</b></h3>
                                    <p className = 'info-text-tab'>
                                        Users maintain full control<br/> over their capital.
                                        Rift Link has no access to <br/>deposit or withdraw on user<br/> account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className = 'why-mob pt-5'>
                    <div className = 'info pt-5 pb-5'>
                        <h1 className = 'info-head-mob text-center'>What is Rift Link ?</h1>
                    </div>
                    <div className = 'container'>
                        <div className = 'd-flex'>
                            <div className = ''>
                                <img src = {icon} alt= ''className = 'icon-mob'></img>
                            </div>
                            <div className = ''>
                                <p className = 'info-text-mob'><b>Rift Link</b> is a cloud-based, third-party<br/> copytrading 
                                platform developed<br/> to help you earn automated and consistent 
                                income on the forex<br/> market.</p>
                            </div>
                        </div>
                        <div className = 'd-flex pt-3'>
                            <div className = ''>
                                <img src = {icon1} alt='' className = 'icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text-mob'><b>High Accuracy Trading</b></h3>
                                <p className = 'info-text-mob'>
                                    Daily accurate trades executed  by AI powered trading bots and expert<br/> analysts.
                                    Eliminating emotion-based<br/> trading.</p>
                            </div>
                        </div>
                        <div className = 'd-flex pt-3'>
                            <div className = ''>
                                <img src = {icon2} alt='' className = 'icon-tab icon-mob'></img>
                            </div>
                            <div className = 'ps-3'>
                                <h3 className = 'info-text-mob'><b>Powerful Copytrading Software</b></h3>
                                <p className = 'info-text-mob'>
                                    Lightening fast copy speed with low 
                                    latency, sophiscated risk management protocol
                                    
                                </p>
                            </div>
                        </div>
                        <div className = 'd-flex pt-3'>
                            <div className = ''>
                                <img src = {icon3} alt='' className = 'icon-tab icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text-mob'><b>Metatrader 4&5 Compatible</b></h3>
                                <p className = 'info-text-mob'>
                                    Rift Link is compatible with any broker all over the 
                                    world as long as they offer <br/>Metatrader trading accounts.
                                    </p>
                            </div>
                        </div>
                        <div className = 'd-flex pt-3'>
                            <div className = ''>
                                <img src = {icon4} alt='' className = 'icon-tab icon-mob'></img>
                            </div>
                            <div className = ''>
                            <h3 className = 'info-text-mob'><b>Full Capital Control</b></h3>
                                <p className = 'info-text-mob'>
                                    Users maintain full control over their capital.
                                    Rift Link has no access to<br/> deposit or withdraw on user<br/> account.
                                </p>
                            </div>
                        </div>
                        <div className = 'd-flex pt-3'>
                            <div className = ''>
                                <img src = {icon4} alt='' className = 'icon-tab icon-mob'></img>
                            </div>
                            <div className = ''>
                                <h3 className = 'info-text-mob'><b>Full Capital Control</b></h3>
                                <p className = 'info-text-mob'>
                                    Users maintain full control over their capital.
                                    Rift Link has no access to <br/>deposit or withdraw on user<br/> account.
                                </p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className = 'd-flex justify-content-center pt-5 pb-5'>
                    <button type="button" onClick={routeChange} class="sub-btn2 sub-btn2-tab sub-btn2-mob btn btn-info text-white text-center">START MY FREE TRAIL</button>
                </div>

            </section>
        </section>


    );
}



export default Two;