import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./sidebarcontent";
import notify from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/bell.png'
import carbon from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/carbon_add-filled.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './packages.css';
import './dashboard.css';
import MaterialTitlePanel from "./material_title_panel";
import axios from "axios";
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

class Dashboard extends React.Component {

  componentDidMount(){
    const config={
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }
    axios.get('/',config).then(
      res =>{
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }
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
              <div className="d-flex justify-content-between">
                  <div className = ''>
                    <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Hello!</h3>
                  </div>
                  <div className = 'pt-5'>
                      <img src={notify} alt="icon" className=''></img>
                    </div>
              </div>
              <div className="dash">
                <div className="d-flex pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead dash-subhead-tab pack-subhead-mob ">Need help creating a trading account?</h3>
                  </div>
                  <div className = "ps-5">
                    <button class="btn contact-btn contact-btn-tab btn-primary"> CONTACT SUPPORT</button>
                  </div>
                </div>
              </div>
              {/* mob */}
              <div className="dash-mob">
                <div className="d-flex pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead dash-subhead-tab dash-subhead-mob ">Need help creating a <br/>trading account?</h3>
                  </div>
                  <div className = "ps-5 pt-1">
                    <button class="btn contact-btn contact-btn-tab  contact-btn-mob btn-primary"> CONTACT SUPPORT</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-5">
                  <div className="card card-dash card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon}  alt="icon" className='acct-icon'></img>
                      </div>
                      <div className="pt-3">
                        <h2 className="acc-text acc-text-tab text-black pb-4">Add New Account</h2>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
              <div className=" dash pt-5">
                  <div className="card card-dash card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon}  alt="icon" className='acct-icon'></img>
                      </div>
                      <div className="pt-3">
                        <h2 className="acc-text acc-text-tab text-black pb-4">Add New Account</h2>
                      </div>
                  </div>

                  </div>
              </div>
            </div>
         {/* Mobile */}
        <div className=" dash-mobile">
          
      
      
        </div>
   

      





        </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default Dashboard;