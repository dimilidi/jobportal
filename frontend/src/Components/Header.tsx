import React from "react";
import { Link } from "react-router-dom";
import Navigation from './Navigation'

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="header flex items-baseline  justify-between p-6 ">
      <div className=' bg-lightGreen rounded-[100%] w-[34px] h-[34px] absolute -left-5 '></div>

        <Link to='/adslist'>
          <h2 className="pl-8 font-extrabold tracking-wide text-lg ">Jobsy.</h2> 
        </Link>

          <Navigation />    
    </section>
  )
  }

export default Header;
