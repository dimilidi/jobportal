import { useNavigate } from 'react-router-dom'
import UniButton from '../Components/UniButton'
import Ad from '../Components/Ad'
import useAds from '../Hooks/useAds'
import UniButtonWhite from '../Components/UniButtonWhite'
import UserCard from '../Components/UserCard'

type Props = {}

const Account = (props: Props) => {
  const navigate = useNavigate()
  const ads = useAds()
  return (
    <>
      {/* Grid Container For Whole Page */}
      <div
        className='w-[70%] h-full min-h-[900px]
          mx-auto flex flex-col
          items-center justify-center gap-8
          md:flex-col lg:flex-row'
      >

        {/* User Card */}
        <UserCard />

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div
          className='m-6
            flex flex-col justify-center
            lg:min-w-[470px]'>
        {/* Line - Circle*/}
            {/* Line */}
             <div
              className='w-[35%] min-w-[220px]
                border-b-[3px] border-lightGreen
                absolute hidden
                sm:w-[25%]
                md:w-[15%]
                xl:w-[35%]
                md:top-[230px]
                lg:block lg:top-[250px] lg:right-0
                xl:block xl:top-[240px]' />
            {/* Semicircle */}
             <div
              className='w-24 h-24
                hidden absolute
                right-[-3rem] top-[210px]
                rounded-full bg-lightGreen
                md:hidden
                lg:block lg:top-[180px]
                xl:top-[190px]'>
             </div>

          {/* <p className='min-w-[850px]:absolute mb-4 text-center font-semibold text-lg md: md:mt-0 lg:hidden'>
            You have no Ads yet
          </p> */}

        {/* Post-Ad-Button + Browse-Jobs-Button */}
          <div
            className='w-[100%]
              lg:mt-[20%]
              flex flex-row justify-center gap-6
              sm:justify-center lg:justify-start'>

          <UniButtonWhite
            text='Post Ad'
            type='button'
            onClick={() => navigate('/post-ad')}
          />

          <UniButton
            text='Browse Ads'
            type='button'
            onClick={() => navigate('/adslist')}
          />
          </div>

          {/* Ads Container */}
          <div
            className='
            w-[750px]
            mt-10 p-10 mb-10
            flex flex-col justify-center
            rounded-[21px]
            lg:bg-white lg:shadow-standard
            md:shadow-none md:bg-background'>

          {/* Your Ads */}
          <h3
            className='mb-8 
            text-lg font-semibold
            text-gray text-center'>Your Ads</h3>

          {/* Ads */}
          <div className='mx-auto flex flex-wrap justify-center '>
            {ads.list.map((ad) => (
              <Ad key={ad._id} ad={ad} />
            ))}
          </div>
          </div>
          </div>
      </div>
    </>
      )
    }
    
    export default Account
