import React from 'react';
import logo from '/Users/Awesomejoy/web/Rift-platform/Frontend/src/components/images/Asset 3@4x 1.png';
import logo2 from '/Users/Awesomejoy/web/Rift-platform/Frontend/src/components/images/Asset 3@4x 2.png';
import { FaFacebookF } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



function Footer(){
    return(
        <section className = 'footer'>
            <div className = 'container'>
                <div className = 'pt-5'>
                    <div className = 'ft-des'>
                        <div className = "ft d-flex justify-content-between">
                            <div className = 'ft-logo'>
                                <img src = {logo} alt ='icon' classsName = ''></img>
                            </div>
                            <div className ='ft-col'>
                                    <div className = 'row text-white'>
                                        <div className = 'col-4'>
                                            <h5 className = 'ft-head-link'>RESOURCES</h5>
                                            <h5 className = 'ft-links'>Blog</h5>
                                            <h5 className = 'ft-links'>Packages</h5>
                                            <h5 className = 'ft-links'>Leave a review</h5>
                                        </div>
                                        <div className = 'col-4'>
                                            <h5 className = 'ft-head-link'>COMPANY</h5>
                                            <h5 className = 'ft-links'>About us</h5>
                                            <h5 className = 'ft-links'>F.A.Qs</h5>
                                            <h5 className = 'ft-links'>Terms of service</h5>
                                            <h5 className = 'ft-links'>Privacy Policy</h5>
                                        </div>
                                        <div className = 'col-4'>
                                            <h5 className = 'ft-head-link'>SUPPORT</h5>
                                            <h5 className = 'ft-links'>Contact us on</h5>
                                            <h5 className = 'ft-links'>Telegram</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className = 'social-links d-flex justify-content-between pb-5'>
                            <a href ='https://facebook.com/riftlink.ng/'><FaFacebookF size='1.7em' className =''color='white'/></a>
                            <a href ='https://instagram.com/riftlink'><FaInstagram size='1.7em' className = 'sc-link' color='white'/></a>
                            <a href ='https://linkedin.com/rift-capital-ltd'><FaLinkedinIn size='1.7em'className = 'sc-link' color='white'/></a>
                        </div>
                    </div>
                    {/* Tablet */}
                    <div className = 'ft-tab'>
                        <div className = "ft d-flex justify-content-between">
                            <div className ='ft-col-tab'>
                                <div className = 'text-white'>
                                    <div className = 'ps-3 pb-3'>
                                        <h5 className = 'ft-head-link-tab ft-head-link-mob'>RESOURCES</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob ft-links-mob'>Blog</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Packages</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Leave a review</h5>
                                    </div>
                                    <div className = 'ps-3 pb-3'>
                                        <h5 className = 'ft-head-link-tab ft-head-link-mob'>COMPANY</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>About us</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>F.A.Qs</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Terms of service</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Privacy Policy</h5>
                                    </div>
                                    <div className = 'ps-3 pb-3'>
                                        <h5 className = 'ft-head-link-tab ft-head-link-mob'>SUPPORT</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Contact us on</h5>
                                        <h5 className = 'ft-links-tab ft-links-mob'>Telegram</h5>
                                    </div>
                                </div>
                            </div>
                            <div className = 'tab-logo'>
                                <div className = 'ft-logo-tab pe-5'>
                                    <img src = {logo} alt ='' classsName = ''></img>
                                    <div className = 'social-links-tab d-flex justify-content-between pt-3'>
                                        <a href ='https://facebook.com/riftlink.ng/'><FaFacebookF size='1.7em' className =''color='white'/></a>
                                        <a href ='https://instagram.com/riftlink'><FaInstagram size='1.7em' className = ''color='white'/></a>
                                        <a href ='https://linkedin.com/rift-capital-ltd'><FaLinkedinIn size='1.7em'className = '' color='white'/></a>
                                    </div>
                                </div>
                            </div>
                            {/* mobile */}
                            <div className = 'mob-logo'>
                                <div className = 'ft-logo-mob pe-2'>
                                    <img src = {logo2} alt ='' classsName = ''></img>
                                    <div className = 'social-links-mob  d-flex justify-content-between pt-2'>
                                        <a href ='https://linkedin.com/rift-capital-ltd'><FaFacebookF size='1.3em' className =''color='white'/></a>
                                        <a href ='https://linkedin.com/rift-capital-ltd'><FaInstagram size='1.3em' className = ''color='white'/></a>
                                        <a href ='https://linkedin.com/rift-capital-ltd'><FaLinkedinIn size='1.3em'className = '' color='white'/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className = 'text-white'>
                        <h3 className = 'ps-3 ft-text1 ft-text1-tab ft-text1-mob pt-2'>
                        RIFT LINK is a product of RIFT CAPITAL LTD (Company Number<br/> 13118157), a 
                        limited liability company incorporated in England and Wales
                        </h3>
                        <p className = 'ps-3 ft-text2 ft-text2-tab ft-text2-mob pt-5'>
                        Risk Reminder <br/>
                        Trading foreign exchange and/or contracts for differences on margin carries a high<br/> level of risk and may not be suitable for all investors.<br/>
                        The possibility exists that you could sustain a loss in excess of your deposited funds.<br/> Before deciding to trade the products offered by Rift Link. You should carefully<br/> consider your objectives, 
                        financial situation, needs and level of experience.<br/><br/><br/>

                        You should be aware of all the risks associated with trading on margin.<br/>
                        Rift Link provides general advice that does not consider your objectives, financial<br/> situation or needs.<br/>
                        The content of this Website must not be construed as personal advice.<br/><br/><br/> 

                        Rift Link recommends you seek advice from a separate financial advisor.
                        </p>
                        <p className = 'pt-5 pb-3 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}






export default Footer;

