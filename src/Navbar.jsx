import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
// import './index.css';
import Border from '@material-ui/icons/BorderColor';
const Navbar = ()=>{
  return (
    <>
      <div className="NAVBAR ">
    <div className="nav" style={{backgroundColor:'black'}}>
    <div className="main_div">
    <h1><b className="logo">NETFLIX</b></h1>
    </div>
    <div className="main_div2 d-flex">
      <p className="info">Unlimited Tv shows & movies </p>
      <button className="join">JOIN NOW</button>
      <button className="sign">SIGN IN</button>
    </div>
    </div>
    </div>









    </>
  )
}

export default Navbar;
