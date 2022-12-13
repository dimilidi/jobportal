import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navigation from './Navigation'

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <NavLink to='/adslist'>
        <h2>Jobsy.</h2> 
      </NavLink>
      <Navigation />    
      
      <button>Login</button>
    </>
  )
  }

export default Header;
