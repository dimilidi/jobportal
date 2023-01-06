// Hooks
import useAds from '../Hooks/useAds'
// Icons
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

type Props = {
  className?: string
}

const ContactDetails = (props: Props) => {
  const params = useParams()
  const ads = useAds(`ads/${params.id}`)

  return (
    // DIV WITH PROPS STYLING
    <div className={props.className}>
      {/* GREEN CONTACT BOX */}
      <div
        area-label='contact-data'
        className='px-[20px] py-[20px]  w-[100%]
        flex flex-col items-center justify-center gap-2 rounded-[inherit] 
        text-gray bg-lightBeige xl:bg-lightGreen xl:text-white
   
        xl:items-start xl:px-0 '
      >
        {/* NAME */}
        <h3 className='p-1 self-center text-lg font-bold text-center w-full'>
          {ads.ad?.user.name}
        </h3>

        {/* EMAIL, PHONE, CITY */}
        <div
          area-label='box-with-contact-details'
          className='w-[90%] py-2 xl:ml-3 flex flex-col self-center gap-3 xl:px-1 md:gap-2 sm:p-0 xl:self-start xl:w-full'
        >
          {/* if email is set as a contact data, show email */}
          {ads.ad?.contactVia.includes('email') && (
            <div className='p-2 mx-auto w-full flex items-center'>
              <div className=''>
                <MdEmail className='text-lg ' />
              </div>
              <p className=' ml-2 w-full text-sm break-all'>
                {ads.ad?.user.email}
              </p>
            </div>
          )}

          {/* if phone is set as a contact data, show phone number */}
          {ads.ad?.contactVia.includes('phone') && (
            <div className='mx-auto w-[100%] flex items-center'>
              <div className='p-1'>
                <BsTelephoneFill className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {ads.ad?.user.phone}
              </p>
            </div>
          )}

          {/* if creator of ad has registered city name, show city */}
          {ads.ad?.user.city && ads.ad?.user.city !== '' && (
            <div className='mx-auto w-[100%] flex items-center'>
              <div className='p-1'>
                <FaMapMarkerAlt className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {ads.ad?.user.city}
              </p>
            </div>
          )}

          {/* EMAIL, PHONE, CITY - END */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
