import React from "react";
import { Link } from "react-router-dom";
import Navigation from './Navigation'

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-4 w-screen h-70px top-0 right-0 fixed flex items-center  justify-between bg-background">
      <div className=' bg-lightGreen rounded-[100%] w-[34px] h-[34px] absolute -left-5 '></div>

        <Link to='/adslist'>
          <h2 className="pl-8 font-extrabold tracking-wide text-lg ">Jobsy.</h2> 
        </Link>
       <Navigation />    
    </header>
  )
  }

export default Header;
