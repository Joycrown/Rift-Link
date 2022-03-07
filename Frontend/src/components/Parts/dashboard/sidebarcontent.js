import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './dashboard.css';
import dashicon1 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Vector (3).png'
import dashicon2 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Vector (1).png'
import dashicon3 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Group 1.png'
import dashicon4 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Vector (2).png'
import dashicon5 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Group 3.png'
import dashicon6 from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Group 4.png'
import logo from '/Users/Awesomejoy/web/Rift-platform/RiftLink/Frontend/src/components/images/Asset 3@4x 1.png'

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "white",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    background: 'linear-gradient(90deg, #003087 0%, #007DB2 90.62%)',
  },
  content: {
    padding: "16px",
    height: "100vh",
    background: 'linear-gradient(90deg, #003087 0%, #007DB2 90.62%)',

  }
};
const signOut = () =>{
  localStorage.removeItem('token')
}

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  // const links = [];

  // for (let ind = 0; ind < 3; ind++) {
  //   links.push(
  //     <a key={ind} href="#" style={styles.sidebarLink}>
  //       Mock menu item {ind}
  //     </a>
  //   );
  // }

  return (
    <MaterialTitlePanel style={style}>
        <div classname = "">
            <div style={styles.content}>
                <div className="text-center dash-link">
                  <div className="">
                    <img src={logo} alt="LOGO" className = 'logo-dash logo-dash-mob pt-5 pb-5'/>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="pt-3">
                      <img src={dashicon1} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob'/>
                    </div>
                    <div className="">
                      <Link to = '/dashboard'style={styles.sidebarLink} className = "dashlink dashlink-tab dashlink-mob pe-5">
                        Dashboard</Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly pe-2">
                    <div className="pt-3">
                      <img src={dashicon2} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob'/>
                    </div>
                    <div className="">
                      <Link to='/packages' style={styles.sidebarLink} className = "dashlink dashlink-tab dashlink-mob pe-5">
                        Packages
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly pe-2">
                    <div className="pt-3">
                      <img src={dashicon3} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob ps-3'/>
                    </div>
                    <div className="ps-3">
                      <Link to = {'/dashboard'} className = "dashlink dashlink-tab dashlink-mob-2 pe-2">
                          My Subscriptions
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly pe-4">
                    <div className="pt-3">
                      <img src={dashicon4} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob ps-2' />
                    </div>
                    <div className="ps-2">
                      <Link to = '/' style={styles.sidebarLink} className = "dashlink dashlink-tab dashlink-mob pe-5">
                          My Profile
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly pe-2">
                    <div className="pt-3">
                      <img src={dashicon5} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob ps-2' />
                    </div>
                    <div className="ps-3">
                      <Link to = '/' className = "dashlink dashlink-tab-1 dashlink-mob-1 pe-5 pb-5">
                        Invite a friend
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly pe-2 pt-5">
                    <div className="pt-3">
                      <img src={dashicon6} alt="LOGO" className = 'dashicon dashicon-tab dashicon-mob-2' />
                    </div>
                    <div className="ps-3">
                      <Link to = '/signin' onClick={signOut} style={styles.sidebarLink}className = "dashlink dashlink-tab dashlink-mob-3 pe-5">
                        Log Out
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
