import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/sidebar/Sidebar'
import Dashboard from './containers/dashboard/Dashboard'
import AuthPayment from './containers/authPayment/AuthPayment'
import CheckWallet from './containers/checkWallet/CheckWallet'
import MakePayment from './containers/makePayment/MakePayment'
import RechargeWallet from './containers/rechargeWallet/RechargeWallet'
import RegisterClient from './containers/registerClient/RegisterClient'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/src/jquery'
import 'popper.js'

const App = () =>{
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/wallet" component={CheckWallet}/>
        <Route exact path="/wallet/recharge" component={RechargeWallet}/>
        <Route exact path="/pay" component={MakePayment}/>
        <Route exact path="/pay/auth" component={AuthPayment}/>
        <Route exact path="/register" component={RegisterClient}/>
        <Route path="*"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;