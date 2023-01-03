
import {useNavigate} from "react-router-dom";
// Components
import UniButton from '../Components/UniButton';
import UniButtonWhite from "../Components/UniButtonWhite";
import BrowseJobs from "../Components/BrowseJobs";
// images
import DeliveryGuy from '../assets/images/AuthRequired_delivery_guy.png'


type Props = {}

const AuthRequired = (props: Props) => {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToRegister() {
    navigate('/register')
  }

   
  return (

    <section className='w-[90%] h-full min-h-[900px] my-0 mx-auto  pr-2  md:pt-[0] flex justify-center flex-col items-center' >


      {/* ICON & BROWSE JOBS */}
      <div className="w-full flex">
        <BrowseJobs />
      </div>
      {/* ICON & BROWSE JOBS END */}


      {/* MAIN CONTAINER */}
      <div className='  bg-white p-10 pb-40 md:px-16 flex justify-center items-center flex-col rounded-xl shadow-standard md:w-[400]' >
          <h1 className=' text-4xl md:text-5xl'>Be part of <br /> our  <span className='italic text-lightGreen font-semibold'>Mission</span></h1>

          <div className=' w-[80%] text-center mt-8'>
            <p>Please login to see more information</p>
          </div>

          <UniButton
                text='Login'
                onClick={navigateToLogin}
                className='my-5 '
              />

          <UniButtonWhite
                text='Sign up'
                onClick={navigateToRegister}
              />

              {/* ELEMENTS */}
              {/* Line */}
              <div 
                area-label='line'
                className='w-[52%] min-w-[240px] border-b-[3px] 
                border-lightGreen sm:block 
                absolute top-[330px] md:top-[340px] right-0'></div>
                
              {/* Circle */}
              <div 
                area-label='circle'
                className='w-24 h-24 hidden right-
                [-3rem] top-[280px]  
                rounded-full bg-lightGreen 
                lg:block absolute'></div>
              {/* ELEMENTS END*/}


              {/* IMAGES */}
              <div >
                <img 
                src={DeliveryGuy} alt="postman" 
                className='scale-x-[-1] absolute -left-12 
                sm:top-[460px] sm:left-4 max-h-96 overflow-hidden 
                md:max-h-full  md:top-[360px] md:-left-4 
                lg:left-32 lg:top-[300px] 
                xl:left-56 xl:top-[260px] 
                2xl:left-96  ' />
              </div>
              {/* IMAGES END */}        

      </div>
      {/* MAIN CONTAINER END */}

    </section>
  )
}

export default AuthRequired