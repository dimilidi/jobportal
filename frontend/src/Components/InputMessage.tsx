import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'
import useMessenger, { socket } from '../Hooks/useMessenger'
import { useState } from 'react'


import React from 'react'
import useAd from '../Hooks/useAd'
import { RiSendPlane2Line } from 'react-icons/ri'





function InputMessage() {
  const {user} = useUser()
  const {ad }= useAd()
  const chat = useMessenger()
  const [text, setText] = useState("")
  const [typingTimeout, setTypingTimeout]= useState(null) as any



  
  function inputHandler(e: any) {
   
    setText(e.target.value)

    socket.emit('typing-started', ad?.user._id) 
    if (typingTimeout) clearTimeout(typingTimeout)
      setTypingTimeout(setTimeout(() => {      
      socket.emit('typing-stopped')
    },1000))

  }
 


  
  const sendMessage =  (e:React.SyntheticEvent) => {
    e.preventDefault()
    setText('')
    if(text !== '') {
      const messageData = {
        room: chat.room,
        author: user?.name,
        message: text,
        date: new Date(Date.now()).toDateString(),
        time: 
          new Date(Date.now()).getHours() + 
          ':' + 
          new Date(Date.now()).getMinutes()
      }
      ad &&  chat.sendMessage(messageData)
      chat && chat.setMessages([...chat.messages, {message:messageData, received:false}])
    }
  }
  
 
  return (
    <div className='p-2 mb-2  w-full h-[100px] flex items-center'>
      {/* INPUT MESSAGE */}
      <form 
        onSubmit={sendMessage}
        className='mx-auto   w-[100%]  flex flex-col justify-center items-center gap-1 '
      >
        <div className='w-[95%] flex bg-darkBeige  rounded-lg  ' >
          <input
            className='w-full h-[70px] bg-darkBeige focus:outline-none p-3 rounded-lg '
            type='text'
            name='message'
            onChange={inputHandler}
            value={text}
            placeholder='Write your message ...'
          />
          {/* BUTTON - SEND */}
          <button type='submit' className='p-2 text-gray opacity-50 self-center border-l-2 border-left border-lightGray hover:opacity-100  ease-in-out duration-300'>
            <RiSendPlane2Line size={26} />
          </button>
        </div>

      {/* BUTTON - SEND */}
      {/* onclick soll passieren: der input aus inputfeld soll verschickt werden. */}
      {/* soll verschickt werden an user der die anzeige gestellt hat */}
      {/* wo entsteht diese information und wo wird sie gespeichert ? */}
      {/* in der datenbank ? */}
      {/* <div
        className='flex justify-center items-center mb-10'>
        <UniButton
              area-label='SendMessageButton'
              text='Send'
              type='button'
              style = {{height:'50px'}}
              />
        </div> */}

      
      {/* BUTTON - SEND - END*/}
      </form>
    </div>
  )
}

export default InputMessage