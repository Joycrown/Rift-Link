import React from 'react'
import '../forgetPassword/createpassword.css'
import Navbar from '../signinPage/navbar';


function CreatePassword(){
    return(
      <section className=''>
          <Navbar/>
          <div className='bg-signin vh-100'>
            <div className = 'createpassword-desktop'>
                    <div className = 'd-flex justify-content-around signin-move'>
                        <div className = 'signin-move'>
                            <h2 className = 'wel-text text-white'>Create new<br/> password</h2>
                        </div>
                        {/* tablet */}
                        <div className = 'signin-tab'>
                            <h2 className = 'wel-text wel-text-tab text-white'>Welcome<br/>Back</h2>
                        </div>
                        <div className = 'signin-card signin-card-tab'>
                                <div className= 'card-si'>
                                    <div className = 'card-body'>
                                        <div className = 'container '>
                                            <h3 className = 'head-text head-text-tab pt-4 ps-4'>Reset your password</h3>
                                            <form>
                                                <div class="mb-3 d-flex justify-content-center pt-4">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <input type="password" class="form-control" placeholder="New Password" 
                                                    id="exampleInputPassword1"/>
                                                </div>
                                                <div class="mb-3 d-flex justify-content-center pt-4">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <input type="password" class="form-control" placeholder="Confirm Password" 
                                                    id="exampleInputPassword1"/>
                                                </div>
                                                <div className = 'text-center pt-5 text-center pb-5'>
                                                    <button type="submit" class="btn sign-btn sign-btn-tab btn-primary">CHANGE PASSWORD</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                </div>
                {/* Tablet */}
                <div className = 'createpassword-tablet'>
                    <div className = 'd-flex justify-content-around signin-move'>
                        <div className = 'create-tab'>
                            <h2 className = 'wel-text-tab text-white'>Create new<br/> password</h2>
                        </div>
                        <div className = 'signin-card password-card-tab pt-3'>
                                <div className= 'card-si'>
                                    <div className = 'card-body'>
                                        <div className = 'container '>
                                            <h3 className = 'head-text-tab pt-5 ps-4'>Change your password</h3>
                                            <form>
                                                <div class="mb-3 d-flex justify-content-center pt-4">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <input type="password" class="form-control" placeholder="New Password" 
                                                    id="exampleInputPassword1"/>
                                                </div>
                                                <div class="mb-3 d-flex justify-content-center pt-4">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <input type="password" class="form-control" placeholder="Confirm Password" 
                                                    id="exampleInputPassword1"/>
                                                </div>
                                                <div className = 'text-center pt-5 text-center pb-5'>
                                                    <button type="submit" class="btn sign-btn sign-btn-tab btn-primary">CHANGE PASSWORD</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                </div>
                {/* mobile */}
                <div className='createpassword-mob'>
                    <div className = 'container pb-3'>
                            <h2 className = 'create-text-mob text-white text-center'>Create new password</h2>
                        </div>
                        <div className = 'd-flex justify-content-center'>
                            <div className = 'card-su-mobile'>
                                <div className = 'card-body card-su-mob text-center container'>
                                    <h2 className = 'password-head-text-mob pt-5'>Change your password</h2>
                                </div>
                                <form>
                                    <div class="mb-3 d-flex justify-content-center pt-4">
                                        <label for="exampleInputPassword1" class="form-label"></label>
                                        <input type="password" class="form-control" placeholder="New Password" 
                                        id="exampleInputPassword1"/>
                                    </div>
                                    <div class="mb-3 d-flex justify-content-center pt-4">
                                        <label for="exampleInputPassword1" class="form-label"></label>
                                        <input type="password" class="form-control" placeholder="Confirm Password" 
                                        id="exampleInputPassword1"/>
                                    </div>
                                    <div className = 'text-center pt-5 text-center pb-5'>
                                        <button type="submit" class="btn sign-btn sign-btn-tab btn-primary">CHANGE PASSWORD</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
      </section>
    )
}





export default CreatePassword;
                                            