
import { useNavigate, useParams } from 'react-router-dom'
import useAds from '../Hooks/useAds'
import useUser from '../Hooks/useUser'


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
  modalOpen: boolean
  close: ()=>void
  open: ()=>void
}


function Dropdown({ad,  modalOpen, close, open}:Props) {

    const navigate = useNavigate()
    const params = useParams()
    const user = useUser()
    const {deleteAd} = useAds(`/ads/${ad._id}`)

    const handleEdit = () => {
        navigate(`/ad/edit-ad/${ad._id}`)
    }

    const handleDelete = () => {
      if (user.isLoggedIn === false) navigate('/auth-required')
      if (user.user?._id === ad?.user._id) {
        modalOpen ? close() : open()
        deleteAd()
        window.location.reload()//??????????
      }
    }

  return (
    <div className='mt-[-3px] py-1 px-2 w-full z-10 cursor-pointer leading-6 rounded-lg bg-white '>
         <p  onClick={handleEdit}>Edit</p>
         <p onClick={handleDelete}>Delete</p>
    </div>
  )
}

export default Dropdown