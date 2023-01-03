// Hooks
import useAds from '../Hooks/useAds'
// Icons
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

type Props = {
  className: string
}

const ContactDetails = (props: Props) => {
  const ads = useAds()

  return (
    // DIV WITH PROPS STYLING
    <div className={props.className}>
      {/* GREEN CONTACT BOX */}
      <div
        area-label='contact-data'
        className='px-6 py-12 w-[inherit] h-[inherit] flex flex-col items-center justify-center gap-3 rounded-[inherit] text-white bg-lightGreen lg:items-start lg:gap-2'
      >
        {/* NAME */}
        <h3 className='self-center text-2xl font-bold text-center'>
          {ads.ad?.user.name}
        </h3>

        {/* EMAIL, PHONE, CITY */}
        <div
          area-label='box-with-contact-details'
          className='p-3 px-2 flex flex-col gap-3 sm:p-0  md:gap-2 xl:px-3'
        >
          <div className='mx-auto w-[90%] flex items-center'>
            <div className='p-1'>
              <MdEmail className='text-lg ' />
            </div>
            <p className='ml-2 text-sm break-words md:py-1 '>
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

          {/* EMAIL, PHONE, CITY - END */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
