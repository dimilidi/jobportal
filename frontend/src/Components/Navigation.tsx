// Hooks
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useUser from '../Hooks/useUser'
// Icons
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai'
import { MdOutlineAddTask } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineUserAdd } from 'react-icons/hi'

// Animation
import { motion } from 'framer-motion'

const Navigation = () => {
  // CONSTANTS
  const { user, logout } = useUser()
  console.log(user);
  

  // STATES
  const [navigation, setNavigation] = useState(false)
  const [navToShow, setNavToShow] = useState<Page[] | undefined>([])
  const [burgerNavToShow, setBurgerNavToShow] = useState<Page[] | undefined>([])

  // ANIMATION
  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  //PAGES
  type Page = {
    icon: React.ReactNode
    name: string
    url?: string
    onClick?: () => void
    navCategory: string
    deactivateActive?: boolean
  }
  const pages: Page[] = [
    { icon: <AiOutlineHome />, name: 'Home', url: '/', navCategory: 'base' },
    {
      icon: <RiSuitcaseLine />,
      name: 'Ads',
      url: '/adslist',
      navCategory: 'base',
    },
    {
      icon: <MdOutlineAddTask />,
      name: 'Post Ad',
      url: user ? '/post-ad' : '/auth-required',
      navCategory: 'base',
    },
    {
      icon: <CgProfile />,
      name: 'Account',
      url: '/account',
      navCategory: 'loggedIn',
    },
    {
      icon: <AiOutlineLogin />,
      name: 'Login',
      url: '/login',
      navCategory: 'notLoggedIn',
    },
    {
      icon: <HiOutlineUserAdd />,
      name: 'Sign up',
      url: '/register',
      navCategory: 'notLoggedIn',
    },
    {
      icon: <AiOutlineLogout />,
      name: 'Logout',
      onClick: logout,
      navCategory: 'loggedIn',
      deactivateActive: true,
    },
  ]

  // HANDLE BURGER MENU - Open onClick on Burger Menu, close if an element is clicked in navigation
  function handleNavigation() {
    setNavigation(!navigation)
  }

  // Set navToShow according to the login status of the user
  useEffect(() => {
    // Desktop Menu
    const baseNav = pages.filter((page) => page.navCategory === 'base')
    const loggedInNav = pages.filter(
      (page) => page.navCategory === 'loggedIn' || page.navCategory === 'base'
    )

    // Burger Menu
    const loggedInBurgerNav = pages.filter(
      (page) => page.navCategory === 'base' || page.navCategory === 'loggedIn'
    )
    const notLoggedInBurgerNav = pages.filter(
      (page) =>
        page.navCategory === 'base' || page.navCategory === 'notLoggedIn'
    )

    if (user) {
      setNavToShow(loggedInNav)
      setBurgerNavToShow(loggedInBurgerNav)
    } else {
      setNavToShow(baseNav)
      setBurgerNavToShow(notLoggedInBurgerNav)
    }
  }, [user])

  return (
    <section className='p-6 pb-6 mr-8'>
      {/* NAVIGATION DESKTOP */}
      <nav className='w-full hidden md:flex md:justify-end items-end justify-center'>
        <ul className='flex mr-4'>
          {navToShow?.map((page) => (
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.05 }}
              className='pr-6 hover:text-darkGreen ease-in-out duration-300'
              key={page.name}
            >
              <NavLink
                to={page.url!}
                className={({ isActive }) =>
                  isActive && !page.deactivateActive
                    ? 'text-darkGreen decoration-2 decoration-darkGreen underline underline-offset-8'
                    : ''
                }
                onClick={page.onClick}
              >
                <div className='pl-6 flex items-center gap-8'>
                  <span className='text-[18px]'>{page.name}</span>
                </div>
              </NavLink>
            </motion.li>
          ))}

          {/* if user is NOT logged in, show login | sign up */}
          {!user && (
            <div className='flex'>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                className='pr-2 hover:text-darkGreen ease-in-out duration-300'
              >
                <NavLink
                  to='/login'
                  className={({ isActive }) =>
                    isActive
                      ? 'text-darkGreen  decoration-2 decoration-lightGreen underline underline-offset-8'
                      : ''
                  }
                >
                  Login
                </NavLink>
              </motion.li>{' '}
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
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
              </motion.li>
            </div>
          )}
        </ul>
      </nav>
      {/* NAVIGATION DESKTOP END */}

      {/* BURGER MENU */}
      <nav className='md:hidden '>
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
            className={
              navigation ? 'mt-8 p-0  transition duration-1000 ' : 'hidden'
            }
          >
            {burgerNavToShow?.map((page) => (
              <li
                key={page.name}
                className={
                  'py-6 px-4 w-full border box-border border-darkBeige font-medium text-gray text-left'
                }
                onClick={handleNavigation}
              >
                <NavLink
                  to={page.url!}
                  className={({ isActive }) =>
                    isActive ? 'text-lightGreen' : ''
                  }
                  onClick={page.onClick}
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
