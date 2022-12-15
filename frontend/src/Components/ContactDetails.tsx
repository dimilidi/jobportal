import React from 'react'

type Props = {
  className: string
}

const ContactDetails = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='px-6 py-12 w-[inherit] h-[inherit] rounded-[inherit] text-white bg-lightGreen'>
        <h3>Victoria Schulz</h3>
        <p>etwas@etwas.de</p>
      </div>
    </div>
  )
}

export default ContactDetails
