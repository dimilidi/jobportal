import { useNavigate } from 'react-router-dom'
import UniButton from '../Components/UniButton'
import Ad from '../Components/Ad'
import useAds from '../Hooks/useAds'
import UniButtonWhite from '../Components/UniButtonWhite'
import UserCard from '../Components/UserCard'
import AdMobile from '../Components/AdMobile'

type Props = {}

const Account = (props: Props) => {
  const navigate = useNavigate()
  const ads = useAds()
  return (
    

      <div
        className=' mx-auto pt-[120px] pb-10 w-full h-full min-h-[1200px] 
          flex flex-col items-center justify-center gap-8 
           lg:flex-row lg:justify-around'
      >
        {/* User Card */}

        <div className='h-full w-[95%] lg:w-[30%] flex justify-center'>

        <UserCard style={{width:'95%'}} />
        </div>
        

        

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div
          className='w-[100%]
            flex flex-col justify-center items-center
            lg:w-[70%] '
        >
          {/* Line - Circle*/}
          {/* Line */}
          <div
            className='w-[35%] min-w-[220px]
                border-b-[3px] border-lightGreen
                absolute hidden
                sm:w-[25%]
                md:w-[15%]
                lg:w-[18%]
                xl:w-[35%]
                md:top-[230px]
                lg:block lg:top-[250px] lg:right-0
                xl:block xl:top-[200px]'
          />

          {/* Semicircle */}
          <div
            className='w-24 h-24
                hidden absolute
                right-[-3rem] top-[210px]
                rounded-full bg-lightGreen
                md:hidden
                lg:block lg:top-[180px]
                xl:top-[150px]'
          ></div>

          <h3
            className='mb-8 
            text-lg font-semibold
            text-gray text-center lg:hidden'
          >
            You have no Ads yet
          </h3>

          {/* Post-Ad-Button + Browse-Jobs-Button */}
          <div
            className='w-full
              flex flex-col justify-center items-center gap-6
              sm:justify-center sm:flex-row  lg:justify-start'
          >
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

          {/* Your Ads */}
          <h3
            className='mt-10
            text-lg font-semibold
            text-gray text-center lg:hidden'
          >
            Your Ads
          </h3>
          <div className='mt-[30px] w-full max-w-[750px] h-full flex flex-wrap justify-center items-start rounded-[21px] sm:px-5 sm:mt-3 sm:mb-20 sm:w-[600px] sm:h-[552px] sm:overflow-y-scroll md:w-[80%] md:h-[440px] lg:p-0  lg:h-[610px]  lg:bg-white lg:shadow-standard









           '>
              {/* Ads */}
              <div className='mx-auto flex flex-wrap justify-center '>
                {ads.list.map((ad) => (
                  <Ad key={ad._id} ad={ad} />
                ))}
              </div>
            </div>
        </div>
      </div>
   
   
  )
}

export default Account


// import { useNavigate } from 'react-router-dom'
// import UniButton from '../Components/UniButton'
// import Ad from '../Components/Ad'
// import useAds from '../Hooks/useAds'
// import UniButtonWhite from '../Components/UniButtonWhite'
// import UserCard from '../Components/UserCard'
// import AdMobile from '../Components/AdMobile'

// type Props = {}

// const Account = (props: Props) => {
//   const navigate = useNavigate()
//   const ads = useAds()
//   return (
    

   
//           <div className='mt-[30px] w-full h-full flex flex-wrap justify-items-center items-start sm:px-5 sm:w-[600px] sm:h-[552px]  md:w-[900px] md:h-[440px] sm:overflow-y-scroll '>
//               {/* Ads */}
//               <div className='mx-auto flex flex-wrap justify-center '>
//                 {ads.list.map((ad) => (
//                   <Ad key={ad._id} ad={ad} />
//                 ))}
//               </div>
//             </div>
    
   
   
//   )
// }

// export default Account
