import { useNavigate } from 'react-router-dom'
import Ad from '../Components/Ad'
import man from '../assets/images/Ads_man_working.png'
import useAds from '../Hooks/useAds'
import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'

type Props = {}

const AdsList = (props: Props) => {

  const user = useUser()
  const ads = useAds()

  const navigate = useNavigate()

  const handleClick = () => {
    if (user) {
      navigate('/post-ad')
    } else {
      navigate('/auth-required')
    }
  }

  return (
    <>
      {/* Heading with underline  */}
      <div className='h-[110px] w-full pt-[115px] '>
        <h2 className='mx-auto w-[260px] text-5xl'>
          Be part of
          <p>
            our
            <span className='capitalize  text-lightGreen text-5xl'>
              {' '}
              mission
            </span>
          </p>
        </h2>

        <div className='w-[52%] min-w-[220px] hidden  border-b-[3px] border-lightGreen sm:block absolute sm:top-[210px] sm:right-0'></div>

        {/* Semicircle */}
        <div className='w-24 h-24 hidden  right-[-3rem] top-[160px]  rounded-full bg-lightGreen lg:block absolute'></div>
      </div>

      {/* Page Container */}
      <div className='mx-auto mt-1 pt-8 w-full h-full flex justify-center items-start gap-10 md:h-[71vh]'>
        {/* Image */}
        <div className='mt-[80px] w-[500px] h-[500px] hidden 2xl:flex'>
          <img className='h-full w-full' src={man} alt='' />
        </div>

        {/* Ads Container */}
        <div className='mt-[110px] px-0 w-full h-full flex flex-wrap justify-items-center items-start md:w-[900px] md:h-[530px] md:overflow-y-scroll '>
          {/* Ads */}
          <div className='mx-auto flex flex-wrap justify-center  md:w-[900px]'>
          {
            ads.list.map(ad => (
              <Ad key={ad._id} ad = {ad} />
            ))
          }
          </div>
        </div>
      </div>

      {/* Button Ad Post */}
      <div className='mb-[30px] mt-[25px] w-full h-[50px] flex justify-center items-center'>
        <UniButton
          text='Post Ad'
          onClick={handleClick}
          className='my-7  w-[250px]  self-center lg:mb-0'

        />
      </div>
    </>
  )
}

export default AdsList
