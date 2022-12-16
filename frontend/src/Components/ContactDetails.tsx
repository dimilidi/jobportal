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
        className='flex flex-col items-center justjustify-center gap-3 px-6 py-12 w-[inherit] h-[inherit] rounded-[inherit] text-white bg-lightGreen lg:items-start lg:gap-2'
      >
        {/* Name */}
        <h3 className='self-center text-2xl font-bold'>Victoria Schulz</h3>

        {/* Email, Phone, City */}
        <div
          area-label='box-with-contact-details'
          className='flex flex-col gap-3 md:gap-2'
        >
          <div className='flex items-center'>
            <div>
              <MdEmail className='text-lg' />
            </div>
            <p className='ml-2 text-sm break-all'>
              a-long-email-address@gmail.com
            </p>
          </div>
          <div className='flex items-center'>
            <div>
              <BsTelephoneFill className='text-lg' />
            </div>
            <p className='ml-2 text-sm break-all'>+49(0)1234-4567</p>
          </div>
          <div className='flex items-center'>
            <div>
              <FaMapMarkerAlt className='text-lg' />
            </div>
            <p className='ml-2 text-sm break-all'>04315 Leipzig</p>
          </div>
          {/* Email, Phone, City - END */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
