import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='
      w-screen h-[70px] 
      p-4 
      fixed top-0 z-40 
      flex items-center justify-between 
      bg-background'>
        
      <div className='
        w-[34px] h-[34px]
        absolute -left-5 
        bg-lightGreen rounded-[100%]'>
      </div>

      <Link to='/'>
        <h2 className='pl-8 font-extrabold tracking-wide text-lg'>Jobsy.</h2>
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
