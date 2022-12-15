
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
    <div className='mx-auto w-full h-full flex justify-center items-start gap-10   ' >

          {/* Heading with underline  */}
         
          <div className='h-[120px] w-full absolute z-30 top-[150px] right-0 '>
                <h2 className='mx-auto w-[260px] text-5xl'>
                  Be part of 
                  <p>our
                    <span className='capitalize  text-lightGreen text-5xl' > mission
                    </span>
                  </p> 
                </h2>
            <div className='w-[52%] min-w-[220px] absolute top-[100px] right-0  border-b-[3px] border-lightGreen'></div>

                  {/* Semicircle */}
            <div className='w-24 h-24 hidden  right-[-3rem] top-[50px]  rounded-full bg-lightGreen lg:block absolute'></div>
        </div>
      

      {/* Image */}
      <div className='mt-[220px] w-[500px] h-[500px] hidden bg-blue-200 2xl:flex'></div>

     {/* Ads Container */}
      <div className='mt-[250px] px-0 w-full h-full flex flex-wrap justify-items-center items-start md:w-[900px] md:h-[530px] md:overflow-y-scroll '>
        {/* Ads */}
        <div className='mx-auto flex flex-wrap justify-center  md:w-[900px]'>
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

    {/* Button Ad Post */}
    <div className='mb-[100px] mt-[20px] w-full h-[50px] flex justify-center items-center'>
      <button onClick={handleClick} className='mx-auto p-2 px-6 w-[200px] rounded-full text-[20px] text-white bg-lightGreen '>
        Ad Post
      </button>
    </div>
  
    </>
  )
}

export default AdsList