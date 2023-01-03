import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='p-4 w-screen h-70px top-0 right-0 fixed flex items-center  justify-between z-40 bg-background'>
      <div className='absolute -left-5 bg-lightGreen rounded-[100%] w-[34px] h-[34px]'></div>

      <Link to='/'>
        <h2 className='pl-8 font-extrabold tracking-wide text-lg'>Jobsy.</h2>
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
