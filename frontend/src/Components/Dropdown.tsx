
import { useNavigate, useParams } from 'react-router-dom'


type Props = {
  ad: {
    title: string
    location: string
    category: string
    sector: string
    wage: number
    createdAt: Date
    _id: string
    user: {
      _id: string
    }
  }
}


function Dropdown({ad}:Props) {

    const navigate = useNavigate()
    const params = useParams()

    const handleEdit = () => {
        navigate(`/ad/edit-ad/${ad._id}`)
    }

    const handleDelete = () => {
        
    }


  return (
    <div className='p-2 w-full z-10 cursor-pointer bg-white '>
         <p  onClick={handleEdit}>Edit</p>
         <p onClick={handleDelete}>Delete</p>
    </div>
  )
}

export default Dropdown