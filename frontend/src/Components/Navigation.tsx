// Hooks
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import useUser from '../Hooks/useUser'
// Icons
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineLogin, AiOutlineLogout} from 'react-icons/ai'
import {  MdOutlineAddTask } from 'react-icons/md'
import {  RiSuitcaseLine } from 'react-icons/ri'
import {  CgProfile } from 'react-icons/cg'
import {  HiOutlineUserAdd } from 'react-icons/hi'

// Animation
import { motion } from 'framer-motion'



const Navigation = () => {

  // CONSTANTS    
  const navigate = useNavigate()
  const userHook = useUser()
  const user = userHook.user
  

  // STATES
  const [navigation, setNavigation] = useState(false)

  // ANIMATION
  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  //PAGES
  const pages = [
    { icon: <AiOutlineHome />, name: 'Home', url: '/' },
    { icon: <RiSuitcaseLine />, name: 'Ads', url: '/adslist' },
    { icon: <MdOutlineAddTask />, name: 'Post Ad', url: '/post-ad' },
    { icon: <CgProfile />, name: 'Account', url: '/account' },
    { icon: <HiOutlineUserAdd />, name: 'Sign up', url: '/register' },
    { icon: user ? <AiOutlineLogout /> : <AiOutlineLogin />, name: user ? 'Logout' : 'Login', url: user ? '/auth-required' : '/login' }
  ]

  // HANDLE BURGER MENU

  function handleNavigation() {
    setNavigation(!navigation)
  }


  return (
    <section className='p-6 pb-6 mr-8'>

      {/* NAVIGATION DESKTOP */}
      <nav className='w-full hidden sm:flex sm:justify-end items-end justify-center'>
        <ul className='flex mr-4'>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            className='pr-6 hover:text-darkGreen ease-in-out duration-300'
          >
            <NavLink
              to='/post-ad'
              className={({ isActive }) =>
                isActive
                  ? 'text-darkGreen decoration-2 decoration-darkGreen underline underline-offset-8'
                  : ''
              }
            >
              Post Ad
            </NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            className='pr-10 hover:text-darkGreen ease-in-out duration-300'
          >
            <NavLink
              to='/adslist'
              className={({ isActive }) =>
                isActive
                  ? 'text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8'
                  : ''
              }
            >
              Ads
            </NavLink>
          </motion.li>
        </ul>

        <ul className='flex'>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            className='pr-3 hover:text-darkGreen ease-in-out duration-300'
          >
            <NavLink
              to={ user ? '/auth-required' : '/login'}
              className={({ isActive }) =>
                isActive
                  ? 'text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8'
                  : ''
              }
            >
              { user ? 'Logout' : 'Login' }
            </NavLink>
          </motion.li>

         { !user  &&
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
            className='pr-5 font-bold hover:text-darkGreen ease-in-out duration-300'
          >
              <span className='px-4 font-light'>|</span>

            <NavLink
              to='/register'
              className={({ isActive }) =>
                isActive
                  ? 'text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8'
                  : ''
              }
            >
               Sign up
            </NavLink>
          </motion.li>}
        </ul>
      </nav>
      {/* NAVIGATION DESKTOP END */}

      {/* BURGER MENU */}
      <nav className='sm:hidden '>
        <div
          onClick={handleNavigation}
          className='z-50  absolute top-[29px] cursor-pointer'
        >
          {navigation ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>

        <div
          className={
            navigation
              ? 'touch-none z-40 mt-[80px] w-screen h-screen  absolute top-0 left-0  text-center  bg-background transition duration-700'
              : 'translate-y-[-120%]'
          }
        >
          {/* LIST OF PAGES */}
          <ul
            className={navigation ? 'mt-8 p-0  transition duration-1000 ' : 'hidden'}
          >
            {pages.map((page) => (
                    <li
                key={page.name}
                className={'py-6 px-4 w-full border box-border border-darkBeige font-medium text-gray text-left'}
                onClick={handleNavigation}
              >
                <NavLink
                  to={page.url}
                  className={({ isActive }) =>
                    isActive ? 'text-lightGreen' : ''
                  }
                >
                    <div className='pl-6 flex items-center gap-8'>
                        <span className='text-[24px]'>{page.icon}</span> 
                        <span className='text-[18px]'>{page.name}</span>
                    </div>
                </NavLink>
              </li>

              
            ))}
          </ul>
        </div>
      </nav>
      {/* BURGER MENU  END*/}

    </section>
  )
}

export default Navigation
