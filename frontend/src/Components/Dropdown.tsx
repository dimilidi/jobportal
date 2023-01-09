import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {}

function Dropdown({}: Props) {
    const navigate = useNavigate()
    const params = useParams()
    const handleClick = () => {
        navigate(`/ad/edit-ad/${params.id}`)
    }


  return (
    <div className='p-2 z-10 bg-white'>
         <p onClick={handleClick}>Edit</p>
         <p>Delete</p>
    </div>
  )
}

export default Dropdown