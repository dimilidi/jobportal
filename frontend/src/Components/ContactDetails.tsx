import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

type Props = {
  className: string
}

const ContactDetails = (props: Props) => {
  return (
    // Div with props styling
    <div className={props.className}>
      {/* Green Contact Box */}
      <div
        area-label='contact-data'
        className='flex flex-col items-center justify-center gap-3 px-6 py-12 w-[inherit] h-[inherit] rounded-[inherit] text-white bg-lightGreen lg:items-start lg:gap-2'
      >
        {/* Name */}
        <h3 className='self-center text-3xl font-bold text-center'>Victoria Schulz</h3>

        {/* Email, Phone, City */}
        <div
          area-label='box-with-contact-details'
          className='p-3 px-2 flex flex-col gap-3  xl:px-3 md:gap-2 sm:p-0'
        >
          <div className='flex items-center'>
            <div className='p-1'>
              <MdEmail className='text-lg ' />
            </div>
            <p className='ml-2  text-sm break-words md:py-1 '>
              a-long-email-address@gmail.com
            </p>
          </div>
          <div className='flex items-center'>
            <div className='p-1'>
              <BsTelephoneFill className='text-lg' />
            </div>
            <p className='ml-2 text-sm break-all md:py-1'>+49(0)1234-4567</p>
          </div>
          <div className='flex items-center'>
            <div className='p-1'>
              <FaMapMarkerAlt className='text-lg' />
            </div>
            <p className='ml-2 text-sm break-all md:py-1'>04315 Leipzig</p>
          </div>
          {/* Email, Phone, City - END */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
