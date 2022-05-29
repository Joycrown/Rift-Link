import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./sidebarcontent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './packages.css';
import MaterialTitlePanel from "./material_title_panel";
import { Link } from "react-router-dom";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Packages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <Link
            onClick={this.toggleOpen}
            to = {'/dashboard'}
            style={styles.contentHeaderMenuLink}
          >
            =
          </Link>
        )}
        <span></span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <div className="container">
              <div className="">
                <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Packages</h3>
                <h3 className="pack-subhead pack-subhead-tab pack-subhead-mob pt-3 pb-4">Select your preferred Package.</h3>
              </div>
            </div>
            <div className="dash-desktop">
              <div className="container">
                <div className="dash-card d-flex justify-content-evenly">
                    <div className="">
                      <div className="container pt-5 ps-5 bronze-tab">
                        <h3 className="pack-text pack-text-tab">Bronze</h3>
                        <h3 className="pack-subtext pack-subtext-tab">Baby steps.<br/>Start small, Grow big!</h3>
                      </div>
                    </div>

                    <div className="cards cards-tab cards-mob pt-2">
                      <div className="row">
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab subdash-card-mob">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pack-text-1-mob pt-2">B100</h4>
                                <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $100</b> <br/>Subscription Fee <b> $5/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab subdash-card-mob">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pack-text-1-mob pt-2">B200</h4>
                                <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $200</b> <br/>Subscription Fee <b> $10/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pt-2">B500</h4>
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $500</b> <br/>Subscription Fee <b> $25/month</b></h4>
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
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $1000</b> <br/>Subscription Fee <b> $50/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pt-2">DM3K</h4>
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $3000</b> <br/>Subscription Fee <b> $100/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pt-2">DM5k</h4>
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $5000</b> <br/>Subscription Fee <b> $200/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="container pt-5">
                <div className="dash-card d-flex justify-content-evenly">
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
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b>$10,000</b> <br/>Subscription Fee <b> $350/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pt-2">P25K</h4>
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $25,000</b> <br/>Subscription Fee <b> $600/month</b></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-4 pt-4">
                          <div className="card subdash-card subdash-card-tab">
                            <div className="">
                              <div className="card-body">
                                <h4 className="pack-text-1 pack-text-1-tab pt-2">P50K</h4>
                                <h4 className="pack-subtext pack-subtext-tab">Required Capital<b> $50,000</b> <br/>Subscription Fee <b> $1000/month</b></h4>
                              </div>
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
                                <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $100</b> <br/>Subscription Fee <b> $5/month</b></h4>
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
                              <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $200</b> <br/>Subscription Fee <b> $10/month</b></h4>
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
                                <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $500</b> <br/>Subscription Fee <b> $25/month</b></h4>
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
                              <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $1000</b> <br/>Subscription Fee <b> $50/month</b></h4>
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
                            <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $3000</b> <br/>Subscription Fee <b> $100/month</b></h4>
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
                              <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $5000</b> <br/>Subscription Fee <b> $200/month</b></h4>
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
    <div className="text-center dash-card-mob">
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
                        <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $10,000</b> <br/>Subscription Fee <b> $350/month</b></h4>
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
                      <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $25,000</b> <br/>Subscription Fee <b> $600/month</b></h4>
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
                        <h4 className="pack-subtext pack-subtext-tab pack-subtext-mob">Required Capital<b> $50,000</b> <br/>Subscription Fee <b> $1000/month</b></h4>
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
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default Packages;
