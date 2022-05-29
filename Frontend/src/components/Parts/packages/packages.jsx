import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import {useNavigate} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import logomodal from '../../images/Riftlink Logo@5x.png';
import '../dashboard testing/packages.css';
import '../dashboard testing/dashboard.css';
import { Link} from "react-router-dom";
import Swal from "sweetalert2"
export default function Packages() {

  
  const navigate = useNavigate();
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//     const config={
//       headers:{
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//       },
//       method: "GET",
//     }
//     axios.get('/users/me/',config)
//     .then(res =>res.data).
//     then(receivedData => setData(receivedData))
//     .catch((error)=>{
//       console.log(error)
//       if (error){
//         navigate('/signin')
//       }
//     }
//     )
//   },[])
//   console.log(data.first_name)


  
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .row__one,
        
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  const initialValues = {
    account: '',
    password:'',
    id:'',
    server:'',
   
  }
  let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KltJvC32BZwrJjM7cgnli2e",
    quantity: 1
  };
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/subscription`,
    cancelUrl: `${window.location.origin}/packages`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  
    const routeChange = () =>{ 
        let path = `/modal`; 
        navigate(path);}
  
  return (
    <Section>
      <div className="grid">
        <div className="row__one">
            <div className="">
              <div className="container">
                <div className="">
                  <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Packages</h3>
                  <h3 className="pack-subhead pack-subhead-tab pack-subhead-mob pt-3 pb-4">Select your preferred Package.</h3>
                </div>
              </div>
              <div className="dash-desktop">
                <div className="container pt-5">
                  <div className="dash-card d-flex justify-content-evenly">
                      <div className="">
                        <div className="container pt-5 ps-5 bronze-tab">
                          <h3 className="pack-text pack-text-tab">Bronze</h3>
                          <h3 className="pack-subtext pack-subtext-tab">Baby steps.<br/>Start small, Grow big!</h3>
                        </div>
                      </div>

                      <div className="cards cards-tab pt-2">
                        <div className="row">
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab"data-bs-toggle="modal" data-bs-target="#notice">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">B100</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $100</b> <br/>Subscription Fee <b> $10/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">B200</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $200</b> <br/>Subscription Fee <b> $20/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">B500</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $500</b> <br/>Subscription Fee <b> $50/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="container pt-5">
                  <div className="dash-card-2 d-flex justify-content-evenly">
                      <div className="">
                        <div className="container pt-5 ps-5 bronze-tab">
                          <h3 className="pack-text pack-text-tab">Diamond</h3>
                          <h3 className="pack-subtext pack-subtext-tab">More Capital,<br/>More Value!</h3>
                        </div>
                      </div>

                      <div className="cards cards-tab pt-2">
                        <div className="row">
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">DM1K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $1000</b> <br/>Subscription Fee <b> $100/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">DM3K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $3000</b> <br/>Subscription Fee <b> $300/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">DM5k</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $5000</b> <br/>Subscription Fee <b> $450/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="container pt-5">
                  <div className="dash-card-3 d-flex justify-content-evenly">
                      <div className="">
                        <div className="container pt-5 ps-5">
                          <h3 className="pack-text pack-text-tab">Platinum</h3>
                          <h3 className="pack-subtext pack-subtext-tab">More Capital,<br/>More Value!</h3>
                        </div>
                      </div>
                      <div className="cards cards-tab pt-2">
                        <div className="row">
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">P10K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b>$10,000</b> <br/>Subscription Fee <b> $850/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">P25K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $25,000</b> <br/>Subscription Fee <b> $1650/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 pt-4">
                            <div className="card subdash-card subdash-card-tab">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1 pack-text-1-tab pt-2">P50K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $50,000</b> <br/>Subscription Fee <b> $2250/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            {/* Tablet */}
              <div className="dash-tablet">
                <div className="d-flex justify-content-center">
                  <div className="text-center dash-card">
                    <div className="">
                      <div className="text-center pt-3">
                        <h3 className="pack-text-tab">Bronze</h3>
                        <h3 className="pack-subtext-tab">Baby steps.<br/>Start small, Grow big!</h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div className="card subdash-card-tab text-center pt-5">
                              <div className="">
                                <h4 className="pack-text-1-tab">B100</h4>
                                <h4 className=" pack-subtext-tab">Required Capital<b> $100</b> <br/>Subscription Fee <b> $10/month</b></h4>
                              </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                          <div className="card subdash-card-tab text-center pt-5">
                              <div className="card-body">
                                <h4 className="pack-text-1-tab pt-2">B100</h4>
                                <h4 className=" pack-subtext-tab">Required Capital<b> $100</b> <br/>Subscription Fee <b> $10/month</b></h4>
                              </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div className="card subdash-card-tab text-center pt-5">
                              <div className="card-body">
                                <h4 className="pack-text-1-tab pt-2">B100</h4>
                                <h4 className=" pack-subtext-tab">Required Capital<b> $100</b> <br/>Subscription Fee <b> $10/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="dash-card-2">
                  <div className="container">
                    <div className="text-center pt-4">
                      <h3 className="pack-text-tab">Diamond</h3>
                      <h3 className="pack-subtext-tab">More Capital,<br/>More Value!</h3>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="card subdash-card-tab text-center pt-5">
                            <div className="">
                              <h4 className="pack-text-1-tab">DM1K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $1000</b> <br/>Subscription Fee <b> $100/month</b></h4>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                        <div className="card subdash-card-tab text-center pt-5">
                            <div className="card-body">
                              <h4 className="pack-text-1-tab pt-2">DM3K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $3000</b> <br/>Subscription Fee <b> $300/month</b></h4>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div className="card subdash-card-tab text-center pt-5">
                            <div className="card-body">
                              <h4 className="pack-text-1-tab pt-2">DM5K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $5000</b> <br/>Subscription Fee <b> $450/month</b></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="dash-card-3">
                  <div className="container">
                    <div className="text-center pt-4">
                      <h3 className="pack-text-tab">Platinum</h3>
                      <h3 className="pack-subtext-tab">More Capital,<br/>More Value!</h3>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="card subdash-card-tab text-center pt-5">
                            <div className="">
                              <h4 className="pack-text-1-tab">P10K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $10000</b> <br/>Subscription Fee <b> $850/month</b></h4>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                        <div className="card subdash-card-tab text-center pt-5">
                            <div className="card-body">
                              <h4 className="pack-text-1-tab pt-2">P25K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $25000</b> <br/>Subscription Fee <b> $1650/month</b></h4>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div className="card subdash-card-tab text-center pt-5">
                            <div className="card-body">
                              <h4 className="pack-text-1-tab pt-2">P50K</h4>
                              <h4 className=" pack-subtext-tab">Required Capital<b> $50000</b> <br/>Subscription Fee <b> $2250/month</b></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         {/* Mobile */}
              <div className=" dash-mobile">
                <div className = 'd-flex justify-content-center'>
                  <div className="text-center dash-card-mob">
                    <div className="bronze-mob pt-3">
                      <h3 className="pack-text-mob">Bronze</h3>
                      <h3 className="pack-subtext-mob">Baby steps.<br/>Start small, Grow big!</h3>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                      </div>
                      <div className = ''>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div className="cards d-flex justify-content-center cards-tab pt-2">
                              <div className="card subdash-card-mob">
                                  <div className="">
                                    <div className="card-body">
                                      <h4 className="pack-text-1-mob pt-2">B100</h4>
                                      <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $100</b> <br/>Subscription Fee <b> $10/month</b></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="carousel-item">
                          <div className="cards d-flex justify-content-center cards-tab pt-2">
                            <div className="card subdash-card-mob">
                                <div className="">
                                  <div className="card-body">
                                    <h4 className="pack-text-1-mob pt-2">B200</h4>
                                    <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $200</b> <br/>Subscription Fee <b> $20/month</b></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div className="cards d-flex justify-content-center cards-tab pt-2">
                              <div className="card subdash-card-mob">
                                  <div className="">
                                    <div className="card-body">
                                      <h4 className="pack-text-1-mob pt-2">B500</h4>
                                      <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $500</b> <br/>Subscription Fee <b> $50/month</b></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                </div>
              {/* step2 */}
              <div className = 'd-flex justify-content-center pt-3'>
                <div className="text-center dash-card-2-mob">
                  <div className="bronze-mob pt-3">
                    <h3 className="pack-text-mob">Diamond</h3>
                    <h3 className="pack-subtext-mob">More Capital,<br/>More Value!</h3>
                  </div>
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                    </div>
                    <div className = ''>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="cards d-flex justify-content-center cards-tab pt-2">
                            <div className="card subdash-card-mob">
                                <div className="">
                                  <div className="card-body">
                                    <h4 className="pack-text-1-mob pt-2">DM1K</h4>
                                    <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $1000</b> <br/>Subscription Fee <b> $100/month</b></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="cards d-flex justify-content-center cards-tab pt-2">
                          <div className="card subdash-card-mob">
                              <div className="">
                                <div className="card-body">
                                  <h4 className="pack-text-1-mob pt-2">DM3K</h4>
                                  <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $3000</b> <br/>Subscription Fee <b> $300/month</b></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div className="cards d-flex justify-content-center cards-tab pt-2">
                            <div className="card subdash-card-mob">
                                <div className="">
                                  <div className="card-body">
                                    <h4 className="pack-text-1-mob pt-2">DM5k</h4>
                                    <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $5000</b> <br/>Subscription Fee <b> $450/month</b></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
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
              </div>
              <div className = 'd-flex justify-content-center pt-3'>
          <div className="text-center dash-card-3-mob">
            <div className="bronze-mob pt-3">
              <h3 className="pack-text-mob">Platinum</h3>
              <h3 className="pack-subtext-mob">More Capital,<br/>More Value!</h3>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className = ''>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="cards d-flex justify-content-center cards-tab pt-2">
                      <div className="card subdash-card-mob">
                          <div className="">
                            <div className="card-body">
                              <h4 className="pack-text-1-mob pt-2">P10K</h4>
                              <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $10,000</b> <br/>Subscription Fee <b> $850/month</b></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                  <div className="cards d-flex justify-content-center cards-tab pt-2">
                    <div className="card subdash-card-mob">
                        <div className="">
                          <div className="card-body">
                            <h4 className="pack-text-1-mob pt-2">P25K</h4>
                            <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $25,000</b> <br/>Subscription Fee <b> $1650/month</b></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="cards d-flex justify-content-center cards-tab pt-2">
                      <div className="card subdash-card-mob">
                          <div className="">
                            <div className="card-body">
                              <h4 className="pack-text-1-mob pt-2">P50K</h4>
                              <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $50,000</b> <br/>Subscription Fee <b> $2250/month</b></h4>
                            </div>
                          </div>
                        </div>
                      </div>
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
            </div>
              </div>
            </div>
        </div>
         {/* <!-- Modal --> */}
         <div class="modal fade" id="notice" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class= ''>
                <div class = 'card-body-modal'>
                  <div class = 'modal-head d-flex justify-content-between container pt-3'>
                    <div className=" container ">
                      <h4 className="text-white modal-head-text modal-head-text-tab">Notice</h4>
                    </div>
                    <div className="ps-3">
                      <button type="button" class="btn-close modal-close modal-close-tab" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  </div>
                  <div className="modal-form container ps-4 pt-3">
                    <img src = {logomodal} alt='logo' className="" />
                  </div>
                  <div className="modal-text ps-3">
                    <p className="p-modal-text">
                    1.Ensure that you have your funded Metatrader (4/5) account on standby before proceeding.
                    </p>
                    <p className="p-modal-text">
                    2. To ensure proper risk management, do not select a package higher than your trading capital.
                    </p>
                  </div>
                  <div className="text-center pb-3">
                    <button class="btn sign-btn-modal sign-btn-modal-tab btn-primary" data-bs-toggle="modal" data-bs-target="#billing">PROCEED</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
        <div class="modal fade" id="billing" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class= ''>
                <div class = 'card-body-modal'>
                  <div class = 'modal-head d-flex justify-content-between container pt-3'>
                    <div className=" container ">
                      <h4 className="text-white modal-head-text modal-head-text-tab">Billing Information</h4>
                    </div>
                    <div className="ps-3">
                      <button type="button" class="btn-close modal-close modal-close-tab" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  </div>
                  <div className="modal-form container ps-4 pt-3">
                    <img src = {logomodal} alt='logo' className="" />
                  </div>
                  <div className="modal-text ps-3">
                    <p className="p-modal-text">
                    Please select a payment method:
                    </p>
                    <p className="p-modal-text">
                    2. To ensure proper risk management, do not select a package higher than your trading capital.
                    </p>
                  </div>
                  <div className="text-center pb-3">
                    <button className="btn sign-btn-modal sign-btn-modal-tab btn-primary" onClick={redirectToCheckout}
                    disabled={isLoading} >{isLoading ? "Loading..." : "PROCEED"}</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100%;
  // .grid {
  //   display: flex;
  //   flex-direction: column;
  //   height: 100%;
  //   gap: 1rem;
  //   // margin-top: 2rem;
  //   .row__one {
  //     display: grid;
  //     grid-template-columns: repeat(2, 1fr);
  //     height: 50%;
  //     gap: 1rem;
  //   }
  //   .row__two {
  //     display: grid;
  //     grid-template-columns: repeat(3, 1fr);
  //     gap: 1rem;
  //     height: 50%;
  //   }
  // }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
