// Hooks
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import useAd from '../Hooks/useAd'
// Components
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
import BrowseJobs from '../Components/BrowseJobs'
// Libraries
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Images
import thinkingGirl from '../assets/images/SingleAd_girl.png'
import DeleteAd from '../assets/images/DeleteAd.png'

// Framer-motion
import { motion } from 'framer-motion'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import Modal from '../Components/Modal'
import { BsFillEyeFill } from 'react-icons/bs'
import Message from './Message'
import useMessenger from '../Hooks/useMessenger'
import axiosInstance from '../api/axiosInstance'
import e from 'cors'
import TextEditorRender from '../Components/TextEditorRender'
import UniButtonDark from '../Components/UniButtonDark'


const SingleAd = () => {

  // CONSTANTS
  const params = useParams()
  const navigate = useNavigate()
  const user = useUser()
  const { ad,  isLoading, deleteAd } = useAd()
  const {chats, setChats, setC, currentChat, setCurrentChat} = useMessenger()
  const [openChat, setOpenChat] = useState(false)
  const [msg, setMsg] = useState<any[]>([])


  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  const sender = user.user?._id

  // CREATE CHAT
 const createChat = async () => {
  const chat ={
    senderId: user.user?._id,
    receiverId: ad?.user._id
  }
  
  const response = await axiosInstance
    .post(`/chat`,chat )
    .catch((e) => e.response)

  setMsg([...chats, chat]) 
  setChats([...chats, chat]) 
  setCurrentChat(chat)
}



  // HANDLE MESSAGE 
  const handleMessage = () => {
    
    if (user.isLoggedIn === false) navigate('/auth-required')
    console.log(chats.find((chat:any) => chat.members?.includes( ad?.user?._id) ));
    
    // setOpenChat(true)
    // create chat if chat doesn't already exist
   !(msg.find((chat:any) => chat.members?.includes( ad?.user?._id) )) && createChat()
  console.log('CHATS--------------------',msg);
  navigate('/message')
  
  }


  // HANDLE EDIT
  const handleEdit = () => {
    if (user.isLoggedIn === false) navigate('/auth-required')
    if (user.user?._id === ad?.user._id) navigate(`/ad/edit-ad/${params.id}`)
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
    if(ad){
     console.log(ad.views)
      deleteAd(ad?._id)
      navigate(`/account`)
    }
  }

 // OPEN CHAT 
  // if(openChat){
  //   return <Message />
  // }

  

  // If no ad was fetched, return div with message
  if (!ad) {
    return <div>No Ad could be found</div>
  } else {
    return (
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        area-label='page-singleAd'
        className='pb-20 w-[95%] h-full min-h-[900px] flex flex-col items-center justify-center text-textBlack md:pt-[140px] xl:pt-[120px] '
      >
        {/* MAIN PART OF SINGLE AD */}

        <div
          area-label='main'
          className='w-[95%] sm:max-w-[900px]  h-full flex flex-col justify-start sm:w-[80%] md:w-[70%]  lg:w-[50%] xl:w-[800px] md:min-h-[650px]  xl:min-h-full'
        >
          <div className='flex justify-between w-full md:w-[600px] md:ml-[-30px] xl:w-full xl:ml-0'>
          <BrowseJobs
            style={{
              paddingLeft: '10px',
              paddingBottom: '20px',
              alignSelf: 'start',
            }}
          />
          </div>

          {/* Ad */}
          <div
            area-label='ad'
            className='py-10 px-2 sm:px-5 sm:mx-0 sm:p-5 mt-0 mx-2 w-[90%] min-h-[400px] sm:h-[400px] 
            sm:w-[600px] xl:w-[100%] xl:h-[450px]
            flex flex-col  justify-start item-center self-center z-10 rounded-[21px] bg-white shadow-standard'
          >
            <AdMobile />

            {!isLoading && (
              <div
                area-label='description'
                className='mt-3 px-3 sm:max-h-[230px] sm:overflow-y-scroll'
              >
                {/* <h3 className='text-[20px]'>Description</h3> */}
                <p className='text-[14px] text-justify text-gray/80'>
                  {/* {ad.description} */}
                  {/* Formated text mit Text Editor */}
                  <TextEditorRender />
                </p>
              </div>
            )}
                {/* VIEWS */}
                <div className=" h-[25px] pr-[20px] mt-5 flex items-center justify-end gap-1 text-sm text-gray opacity-50">
                <BsFillEyeFill /> <span>{ad.views}</span>
              </div>
          </div>

        

          {/* IF AD IS CREATED BY USER, BUTTON "EDIT" && "DELETE" */}
          {user.user?._id === ad?.user._id && (
            <div className='px-3 flex justify-center gap-2'>
              <UniButtonDark
                text={
                  <AiFillEdit style={{ width: '40px', fontSize: '20px' }} />
                }
                onClick={handleEdit}
                className='my-7 self-center mb-2 lg:mb-0'
                style={{ width: '80px', height: '40px' }}
              />
              <UniButton
                text={
                  <RiDeleteBinLine
                    style={{ width: '40px', fontSize: '20px' }}
                  />
                }
                onClick={handleDelete}
                className='my-7 self-center mb-2 lg:mb-0'
                style={{ width: '80px', height: '40px' }}
              />
            </div>
          )}

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
                  <UniButton style={{width:'160px', height:'45px'}} text='Quit' onClick={close} /> 
                </div>
            </div>
            </div>
            </Modal>
          )}

          {/* ContactDetails MOBILE - If user exists, show ContactDetails */}
          {user.user && 
          <div className='flex justify-center '>
              <ContactDetails
                className=' w-[90%] max-w-[340px] pt-10 
              sm:w-[80%]
              lg:w-[800px]
              flex justify-center self-center rounded-xl xl:hidden'
              />
          </div>
          }

          {/* IF AD IS NOT CREATED BY USER, BUTTON "MESSAGE" */}
          <div className='flex justify-center gap-2'>
          { user.user?._id !== ad?.user._id && (
            <UniButton
           
              text='Message'
              onClick={handleMessage}
              className='my-7 self-center mb-2 lg:mb-0'
            />
            )}
          </div>
        </div>
        {/* Ad - END */}

        {/* Main part of single ad - END */}

        {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster */}

        {/* Circle and line in the background */}
        <div
          area-label='circle'
          className='hidden 
        w-[332px] h-[332px] absolute lg:top-[470px] lg:left-[-230px] lg:translate-y-[-50%]  lg:rounded-full  lg:bg-lightGreen
        xl:block'
        />

        <div
          area-label='line'
          className='hidden xl:block lg:absolute lg:top-[475px] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
        />
        {/* Circle and line in the background - END */}

        {/* ContactDetails DESKTOP - If user exists, show ContactDetails */}
        {user.user && (
          <ContactDetails
            className='hidden sm:hidden xl:block
        w-[250px] m-8 absolute lg:items-center -right-10 top-[435px] rounded-l-[65px] translate-y-[-50%] 
        xl:min-w-[230px]'
          />
        )}
        {/* ContactDetails - END */}

        {/* IMAGE */}
        <img
          src={thinkingGirl}
          alt='illustration of girl in front of laptop'
          className='hidden xl:w-[220px] xl:absolute xl:bottom-[30px] xl:left-[14%] xl:block lg:z-30'
        />
        {/* IMAGE - END */}

        <ToastContainer position='bottom-right' />

        {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster - END */}
        {/* test */}
      </motion.div>
    )
  }
}

export default SingleAd
