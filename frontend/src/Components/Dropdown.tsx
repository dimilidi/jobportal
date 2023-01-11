import { useNavigate, useParams } from 'react-router-dom'
import useAd from '../Hooks/useAd'
import useUser from '../Hooks/useUser'
import { Ad } from '../type'
import Modal from './Modal'
import UniButton from './UniButton'
import UniButtonWhite from './UniButtonWhite'

type Props = {
  // ad: {
  //   title: string
  //   location: string
  //   category: string
  //   sector: string
  //   wage: number
  //   createdAt: Date
  //   _id: string
  //   user: {
  //     _id: string
  //   }
  // }
  ad: Ad
  modalOpen: boolean
  close: () => void
  open: () => void
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

function Dropdown(props: Props) {
  const { ad, modalOpen, close, open, setIsOpen, isOpen } = props
  const navigate = useNavigate()
  const user = useUser()
  const { deleteAd } = useAd()

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
    deleteAd(ad._id)
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
      <div className='mt-[-3px] py-1 px-2 w-full z-10 cursor-pointer leading-6 rounded-lg bg-white '>
        <p onClick={handleEdit}>Edit</p>
        <p onClick={handleDelete}>Delete</p>
      </div>
      {modalOpen && (
        <Modal handleClose={close}>
          <h3>Do you really want to delete your ad?</h3>
          <div className='flex flex-col sm:flex-row gap-5'>
            <UniButton
              style={{ width: '120px', height: '45px' }}
              text='Confirm'
              onClick={confirmDelete}
            />
            <UniButtonWhite
              style={{ width: '120px', height: '45px' }}
              text='Quit'
              onClick={quitDelete}
            />
          </div>
        </Modal>
      )}
    </>
  )
}

export default Dropdown
