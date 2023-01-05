// Hooks
import useAds from '../Hooks/useAds'
// Icons
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

type Props = {
  className?: string
}

const ContactDetails = (props: Props) => {
  const ads = useAds()

  return (
    // DIV WITH PROPS STYLING
    <div className={props.className}>
      {/* GREEN CONTACT BOX */}
      <div
        area-label='contact-data'
        className='px-[20px] py-[20px] 
        flex flex-col items-center justify-center gap-3 rounded-[inherit] 
        text-gray bg-lightBeige xl:bg-lightGreen xl:text-white
        w-[100%]
        lg:items-start'
      >
        {/* NAME */}
        <h3 className='p-1 self-center text-xl font-bold text-center w-full'>
          {ads.ad?.user.name}
        </h3>

        {/* EMAIL, PHONE, CITY */}
        <div
          area-label='box-with-contact-details'
          className=' py-2 flex flex-col gap-3 xl:px-1 md:gap-2 sm:p-0 w-full'
        >
          {/* if email is set as a contact data, show email */}
          {ads.ad?.contactVia.includes('email') && (
            <div className='mx-auto w-full flex items-center'>
              <div className='p-2'>
                <MdEmail className='text-lg ' />
              </div>
              <p className=' w-full ml-2 text-sm break-all md:py-1'>
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