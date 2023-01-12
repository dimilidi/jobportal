import { useNavigate, useParams } from 'react-router-dom'
import useAds from '../Hooks/useAds'
import useUser from '../Hooks/useUser'
import Modal from './Modal'
import UniButton from './UniButton'
import UniButtonWhite from './UniButtonWhite'
import DeleteAd from '../assets/images/DeleteAd.png'


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
  setIsOpen: (isOpen:boolean)=>void
  isOpen: boolean
}


function Dropdown(props:Props) {
    const {ad, modalOpen, close, open, setIsOpen, isOpen } = props
    const navigate = useNavigate()
    const params = useParams()
    const user = useUser()
    const {deleteAd} = useAds(`/ads/${ad._id}`)


    // HANDLE EDIT
    const handleEdit = () => {
        navigate(`/ad/edit-ad/${ad._id}`)
    }

    // HANDLE DELETE
    const handleDelete = () => {
      if (user.isLoggedIn === false) navigate('/auth-required')
      if (user.user?._id === ad?.user._id) {
        modalOpen ? close() : open()
      }
    }

   // CONFIRM DELETE
   const confirmDelete = () => {
    deleteAd()
    close()
    setIsOpen(!isOpen)
    window.location.reload()
  }

   // QUIT DELETE
   const quitDelete = () => {
    close()
    setIsOpen(!open)
  }

  return (
    <>
    <div className='mt-[-3px] p-2 z-10 cursor-pointer leading-6 font-medium rounded-lg shadow-md flex flex-col justify-center items-center bg-white text-white gap-3'>
         <p 
          className='w-[100px] text-center rounded-lg bg-darkGreen hover:bg-lightGreen'
          onClick={handleEdit}
         >Edit</p>
         <p
          className='w-[100px] text-center rounded-lg bg-lightGreen hover:bg-darkGreen'
          onClick={handleDelete}
          >Delete</p>
    </div>
     {modalOpen && (
      <Modal handleClose={close}>
        <div
          className='flex flex-col md:flex-row items-center md:items-start'>
          <img
            className='relative bottom-8 left-10 md:left-8 md:bottom-0'
            src={DeleteAd}/>
          <div
            aria-label='text und buttons'
            className='flex flex-col justify-around items-center gap-4 relative md:right-7 bottom-[20px] md:bottom-[0]'>
          <h3 className='font-bold md:text-xl lg:text-3xl text-gray'>Do you really want<br></br>to delete your ad?</h3>
            <div className='flex flex-col gap-3'>
              <UniButton style={{width:'160px', height:'45px', backgroundColor: '#52796F', border: '#52796F'}} text='Confirm' onClick={confirmDelete} />
              <UniButton style={{width:'160px', height:'45px'}} text='Quit' onClick={quitDelete} /> 
            </div>
          </div>
        </div>
      </Modal>
    )}
    </>
  )
}

export default Dropdown