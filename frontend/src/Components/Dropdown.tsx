
import { useNavigate, useParams } from 'react-router-dom'
import Modal from './Modal'
import UniButton from './UniButton'
import UniButtonWhite from './UniButtonWhite'


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
    <>
     <div className='p-2 w-full z-10 cursor-pointer bg-white '>
         <p  onClick={handleEdit}>Edit</p>
         <p onClick={handleDelete}>Delete</p>
    </div>
    {modalOpen && (
            <Modal handleClose={close}>
              <h3>Do you really want to delete your ad?</h3>
              <div className='flex flex-col sm:flex-row gap-5'>
                <UniButton style={{width:'120px', height:'45px'}} text='Confirm' onClick={confirmDelete} />
                <UniButtonWhite style={{width:'120px', height:'45px'}} text='Quit' onClick={close} />
              </div>
            </Modal>
          )}
    </>
   
  )
}

export default Dropdown