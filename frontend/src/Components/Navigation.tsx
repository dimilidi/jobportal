import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

type Props = {}

const Navigation = (props: Props) => {

    //PAGES
    const pages =  [
        {name:'Home', url:'/'},
        {name:'Ads', url:'/adslist'},
        {name:'Post Ad', url:'/post-ad'},
        {name:'Account', url:'/account'},
        {name:'Sign up', url:'/register'},
        {name:'Login', url:'/login'},
        {name:'Logout', url:'/'},
    ]

    // HANDLE BURGER MENU
    const [navigation, setNavigation] = useState(true)  

    function handleNavigation() {
      setNavigation(!navigation)
    }



    // in LIST OF PAGES useUser or Context for handleLogin/Logout 



  return (
    <section className='relative pr-2 pb-6'>

    {/* NAVIGATION DESKTOP */}
        <nav className='hidden sm:flex sm:justify-end items-end justify-center' > 
            <ul className='flex'>
                <li className='pr-3'> <Link to='/post-ad'>Post Ad</Link></li>
                <li className='pr-10'> <Link to='/adslist'>Ads</Link> </li>
            </ul>

            <ul className='flex'>
                <li className='pr-3'> <Link to='/login'>Login</Link> </li>
                <li className='pr-3'>|</li>
                <li className='pr-5 font-bold'> <Link to='/register'>Sign up</Link> </li>
            </ul>
        </nav>
    {/* NAVIGATION DESKTOP END */}


    {/* BURGER MENU */}
        <nav className='sm:hidden absolute z-10  '>            
            
            {/* HANDLE BURGER MENU */}
            <div onClick={handleNavigation} className='cursor-pointer  '>
                {!navigation ?  <AiOutlineClose size={30}/> :<AiOutlineMenu size={30} /> }
            </div>

            <div className={!navigation ? 'fixed top-5 right-7 ease-in-out duration-500': 'fixed right-[-100%]'}>



                {/* LIST OF PAGES */}
                <ul className='pt-10 w-screen h-screen  bg-background sm:flex md:hidden text-center '>
                    {
                        pages.map( (page) => (
                            <li key={page.name} className='p-2 font-medium text-lg'> <Link to={page.url}>{page.name}</Link></li>                                
                        ))
                    }
                    {/* in Pages handleLogin/logout --> user ? show Logout : Login  */}
                
                </ul>
            </div>
        </nav>
    {/* BURGER MENU  END*/}

    </section>

  )
}

export default Navigation