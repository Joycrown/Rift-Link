// import './App.css';
import Home from './components/pages/home';
import Signin from './components/pages/signin';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Multistep from './components/Parts/testing/multistep'
import StepThree from './components/Parts/testing/step3';
// import CreatePassword from './components/Parts/forgetPassword/createpassword'
import Packages from './components/Parts/dashboard/packages';
import Dashboard from './components/Parts/dashboard/dashboard'
import {RequireToken} from './Auth'




function App() {
  return (
        <Router>
          <div className ='App'>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/signin' element = {<Signin/>}/>
              <Route path='/signup'element = {<Multistep/>}/>
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
                 <Packages/>
               </RequireToken>
               }/>
            </Routes>
          </div>
        </Router>
  );
}
export default App;
