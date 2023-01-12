// Hooks
import useAd from '../Hooks/useAd'
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
  const ad = useAd()

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
          {ad.ad?.user.name}
        </h3>

        {/* EMAIL, PHONE, CITY */}
        <div
          area-label='box-with-contact-details'
          className='w-[90%] py-2 xl:ml-3 flex flex-col self-center gap-3 xl:px-1 md:gap-2 sm:p-0 xl:self-start xl:w-full'
        >
          {/* if email is set as a contact data, show email */}
          {ad.ad?.contactVia.includes('email') && (
            <div className='p-2 mx-auto w-full flex items-center'>
              <div className=''>
                <MdEmail className='text-lg ' />
              </div>
              <p className=' ml-2 w-full text-sm break-all'>
                {ad.ad?.user.email}
              </p>
            </div>
          )}

          {/* if phone is set as a contact data, show phone number */}
          {ad.ad?.contactVia.includes('phone') && (
            <div className='mx-auto w-[100%] flex items-center'>
              <div className='p-1'>
                <BsTelephoneFill className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {ad.ad?.user.phone}
              </p>
            </div>
          )}

          {/* if creator of ad has registered city name, show city */}
          {ad.ad?.user.city && ad.ad?.user.city !== '' && (
            <div className='mx-auto w-[100%] flex items-center'>
              <div className='p-1'>
                <FaMapMarkerAlt className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {ad.ad?.user.city}
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
