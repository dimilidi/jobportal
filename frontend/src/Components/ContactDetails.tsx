import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

type Props = {
  className: string
}

const ContactDetails = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='px-6 py-12 w-[inherit] h-[inherit] rounded-[inherit] text-white bg-lightGreen'>
        <h3 className='text-2xl font-bold'>Victoria Schulz</h3>
        <div className='flex items-center'>
          <MdEmail />
          <p>etwas@etwas.de</p>
        </div>
        <div className='flex items-center'>
          <BsTelephoneFill />
          <p>8748720938</p>
        </div>
        <div className='flex items-center'>
          <FaMapMarkerAlt />
          <p>04315 Leipzig</p>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
