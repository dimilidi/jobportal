import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// Animation
import { motion } from 'framer-motion'


type Props = {}

const Navigation = (props: Props) => {

    // Animation
     const animateFrom = {opacity: 0, y: -40}
     const animateTo = {opacity: 1, y: 0}
     
    

    //PAGES
    const pages =  [
        {name:'Home', url:'/'},
        {name:'Ads', url:'/adslist'},
        {name:'Post Ad', url:'/post-ad'},
        {name:'Account', url:'/account'},
        {name:'Sign up', url:'/register'},
        {name:'Login', url:'/login'},
        {name:'Logout', url:'/auth-required'},
    ]

    // HANDLE BURGER MENU
    const [navigation, setNavigation] = useState(false)

    function handleNavigation() {
      setNavigation(!navigation)
    }


    // in LIST OF PAGES useUser or Context for handleLogin/Logout 


  return (
    <section className='p-6 pb-6 mr-8'>

    {/* NAVIGATION DESKTOP */}
        <nav className='w-full hidden sm:flex sm:justify-end items-end justify-center' > 
            <ul className='flex mr-4'>
                <motion.li 
                    initial={animateFrom} 
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    className= 
                    'pr-6 hover:text-darkGreen '
                > 
                    <NavLink 
                        className={({isActive}) =>isActive? "text-darkGreen decoration-2 decoration-darkGreen underline underline-offset-8" :""} 
                        to='/post-ad'
                    >
                            Post Ad
                    </NavLink>
                </motion.li>

                <motion.li 
                    initial={animateFrom} 
                    animate={animateTo}
                    transition={{delay: 0.10}}
                    className='pr-10 hover:text-darkGreen'
                > 
                    <NavLink 
                        className={({isActive}) =>isActive? "text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8" :""}
                        to='/adslist'
                    >
                            Ads
                    </NavLink> 
                </motion.li>
            </ul>

            <ul className='flex'>
                <motion.li 
                    initial={animateFrom} 
                    animate={animateTo}
                    transition={{delay: 0.20}}
                    className='pr-3 hover:text-darkGreen'
                > 
                    <NavLink 
                        className={({isActive}) =>isActive? "text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8" :""}
                        to='/login'
                    >
                            Login
                    </NavLink> 
                </motion.li>

                <motion.li 
                    initial={animateFrom} 
                    animate={animateTo}
                    transition={{delay: 0.30}}
                    className='pr-3 '
                >
                        |
                </motion.li>

                <motion.li 
                    initial={animateFrom} 
                    animate={animateTo}
                    transition={{delay: 0.40}}
                    className='pr-5 font-bold hover:text-darkGreen'
                > 
                    <NavLink 
                         className={({isActive}) =>isActive? "text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8" :""}
                        to='/register'
                    >
                        Sign up
                    </NavLink> 
                </motion.li>
            </ul>
        </nav>
    {/* NAVIGATION DESKTOP END */}


    {/* BURGER MENU */}
        <nav className='sm:hidden '>            
            
            {/* HANDLE BURGER MENU */}
            <div onClick={handleNavigation} className='z-50  absolute top-[25px] cursor-pointer'>
                {navigation ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
            </div>

            <div  className={navigation ? 'z-40 mt-[80px] w-screen h-screen  absolute top-0 left-0  text-center  bg-background transition duration-700' : 'translate-y-[-120%]'}>

                {/* LIST OF PAGES */}
                <ul 
                    className={ navigation? 'mt-8 transition duration-1000 ' : 'hidden '}
                    >
                    {
                        pages.map( (page) => (
                            <li
                                key={page.name} 
                                className={'p-6 font-medium text-4xl' }
                                onClick={handleNavigation}
                            > 
                                <NavLink 
                                    className={({isActive}) =>isActive? "text-lightGreen" :""} 
                                    to={page.url}
                                    >
                                        {page.name}
                                </NavLink>
                            </li>                                
                        ))
                    }
                </ul>
            </div>
        </nav>
    {/* BURGER MENU  END*/}

    </section>

  )
}

export default Navigation