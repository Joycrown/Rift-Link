// import './App.css';
import Home from './components/pages/home';
import Signin from './components/pages/signin';
import "@stripe/stripe-js";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Multistep from './components/Parts/testing/multistep'
import StepThree from './components/Parts/testing/step3';
import CreatePassword from './components/Parts/forgetPassword/createpassword'
import Packages from './components/Parts/dashboard/packages';
import Dashboard from './components/Parts/dashboard/dashboard'
import {RequireToken} from './Auth'
import SidebarApp from './components/Parts/dashboard testing/sidebarApp';
import ModalApp from './components/Parts/modals/modalapp'
import PackagesApp from './components/Parts/packages/packagesApp';
import SubscriptionApp from './components/Parts/subscription/subscriptionApp';




function App() {
  return (
        <Router>
          <div className ='App'>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/signin' element = {<Signin/>}/>
              <Route path='/forgot_password' element = {<CreatePassword/>}/>
              <Route path='/signup'element = {<Multistep/>}/>
              <Route path='/modal'element = {<ModalApp/>}/>
              <Route path='/subscription'element = {<SubscriptionApp/>}/>
              <Route path='/dash'element = {<SidebarApp/>}/>
              <Route path='/dashboard'

               element = {
                <RequireToken>
                  <Dashboard/>
                </RequireToken>
              }

               />
              <Route path='/success' element = {<StepThree/>}/>
              <Route path='/packages' element =
               {
                <RequireToken>
                 <PackagesApp/>
               </RequireToken>
               }/>
            </Routes>
          </div>
        </Router>
  );
}
export default App;
