 
   
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
                    <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Hello {this.state.user.first_name}!</h3>
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

        </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  
 