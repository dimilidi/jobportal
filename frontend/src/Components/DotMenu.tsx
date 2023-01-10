import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

type Props = {
    open: boolean
    setOpen: (open:boolean) => void
}

function DotMenu({ setOpen, open }: Props) {

    const handleToggle = () => {
        setOpen(!open)
    }

  

  return (
    <div className='w-full h_[40px] flex justify-start cursor-pointer '>
    <BsThreeDots
      onClick={handleToggle}
      style={{ height: '20px', width: '70%', alignSelf: 'center' }
   }
    />
  </div>
  )
}

export default DotMenu