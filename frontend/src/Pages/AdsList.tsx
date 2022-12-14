
import { useNavigate } from 'react-router-dom'
import Ad from '../Components/Ad'

type Props = {}

const AdsList = (props: Props) => {

  const navigate = useNavigate()

  const handleClick = () => {
    const user = true// to be replaced with state
    if(user){
      navigate('/post-ad')
    } else {
      navigate('/auth-required')
    }
  }



  return (
    <>    

   {/* Page Container */}
    <div className=' w-full h-full mx-auto flex justify-center items-start gap-10   ' >

          {/* Heading with underline  */}
         
          <div className='h-[120px] absolute z-30 top-[150px] right-0 w-full'>
                <h2 className='text-5xl w-[260px] mx-auto'>
                  Be part of 
                  <p>our
                    <span className='capitalize  text-lightGreen text-5xl' > mission
                    </span>
                  </p> 
                </h2>
            <div className='absolute top-[100px] right-0  w-[52%] min-w-[220px] border-b-[3px] border-lightGreen '></div>

                  {/* Semicircle */}
            <div className='hidden lg:block absolute  right-[-3rem] top-[50px]  w-24 h-24 rounded-full bg-lightGreen'></div>
        </div>
      
      

      {/* Image */}
      <div className='mt-[220px]  hidden 2xl:flex w-[500px] h-[500px]  bg-blue-200'></div>

     {/* Ads Container */}
      <div className='mt-[250px] flex flex-wrap justify-items-center items-start  w-[100%]  md:w-[900px] md:h-[530px] h-[550px] px-0 md:overflow-y-scroll'>
        {/* Ads */}
        <div className=' md:w-[900px] mx-auto flex flex-wrap justify-center  '>
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
        </div>
      </div>
    </div>

    {/* Pagination */}
      {/* <div className='w-[100px] flex float-right'>
        <div>Prev</div>
        <div>Next</div>
      </div> */}

    {/* Button Ad Post */}
    {/* <div className='w-full h-[150px]  flex justify-center items-center'>
      <button onClick={handleClick} className='w-[200px] mx-auto p-2 px-6 bg-lightGreen rounded-full text-white text-[20px] '>
        Ad Post
      </button>
    </div> */}
  
    </>
  
  )
}

export default AdsList