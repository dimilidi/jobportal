// Icons
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
// Hooks
import useUser from '../Hooks/useUser'
import useAds from '../Hooks/useAds'
import AdsList from '../Pages/AdsList'

type Props = {
  className: string
}

const ContactDetails = (props: Props) => {
  const ads = useAds()

  return (
    // Div with props styling
    <div className={props.className}>
      {/* Green Contact Box */}
      <div
        area-label='contact-data'
        className='flex flex-col items-center justify-center gap-3 px-6 py-12 w-[inherit] h-[inherit] rounded-[inherit] text-white bg-lightGreen lg:items-start lg:gap-2'
      >
        {/* Name */}
        <h3 className='self-center text-2xl font-bold text-center'>
          {ads.ad?.user.name}
        </h3>

        {/* Email, Phone, City */}
        <div
          area-label='box-with-contact-details'
          className='p-3 px-2 flex flex-col gap-3 xl:px-3 md:gap-2 sm:p-0'
        >
          <div className='mx-auto w-[90%] flex items-center'>
            <div className='p-1'>
              <MdEmail className='text-lg ' />
            </div>
            <p className='ml-2  text-sm break-words md:py-1 '>
              {ads.ad?.user.email}
            </p>
          </div>

          
            <div className='mx-auto w-[90%] flex items-center'>
              <div className='p-1'>
                <BsTelephoneFill className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {' '}
                {ads.ad?.user.phone ? ads.ad?.user.phone : '–'}
              </p>
            </div>
       

        
            <div className='mx-auto w-[90%] flex items-center'>
              <div className='p-1'>
                <FaMapMarkerAlt className='text-lg' />
              </div>
              <p className='ml-2 text-sm break-all md:py-1'>
                {ads.ad?.user.city ? ads.ad?.user.city : '–'}
              </p>
            </div>
        
          {/* Email, Phone, City - END */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
