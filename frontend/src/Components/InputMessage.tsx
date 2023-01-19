import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'
import useMessenger, { socket } from '../Hooks/useMessenger'
import { useState } from 'react'


import React from 'react'
import useAd from '../Hooks/useAd'
import e from 'cors'
import { FaNodeJs } from 'react-icons/fa'




function InputMessage() {
  const {user} = useUser()
  const {ad }= useAd()
  const chat = useMessenger()
  const [text, setText] = useState("")
  const [typingTimeout, setTypingTimeout]= useState(0)




  React.useEffect(() => {
    if (user) {
      chat.connect(user._id)
    }
    
  },[user])
  
  function inputHandler(e: any) {
    let timeout:NodeJS.Timeout;
    setText(e.target.value)
    socket.emit('typing-started') 

  //  setTypingTimeout(timeout)

  //   if (timeout) clearTimeout(timeout)

  //   timeout = setTimeout(() => {
  //     // socket.emit('typing-stopped')
      
  //   }, 200)
 

  }

  
  const sendMessage = (e:React.SyntheticEvent) => {
    e.preventDefault()
    setText('')
    ad && chat.sendMessage(text, ad?.user._id)
    chat && chat.setMessages([...chat.messages, {message:text, received:false}])
    

  }
  
  // console.log('CHat',chat);
  // console.log('Text',text);
  // console.log("Receiver:", ad?.user)
  // console.log("Sender:", user?._id)
  // console.log('Messages',messages);

 

  return (
    <div>
      {/* INPUT MESSAGE */}
      <form 
        onSubmit={sendMessage}
        className='flex flex-col justify-center items-center gap-4'
      >
        <div>
          <input
            className='w-[230px] h-[100px] mt-4
            md:w-[350px]
            bg-darkBeige rounded-lg
            focus:outline-lightGray p-3'
            type='text'
            name='message'
            onChange={inputHandler}
            value={text}
            placeholder='Write your message ...'
          />
        </div>

      {/* BUTTON - SEND */}
      {/* onclick soll passieren: der input aus inputfeld soll verschickt werden. */}
      {/* soll verschickt werden an user der die anzeige gestellt hat */}
      {/* wo entsteht diese information und wo wird sie gespeichert ? */}
      {/* in der datenbank ? */}
      <div
        className='flex justify-center items-center mb-10'>
        <UniButton
              area-label='SendMessageButton'
              text='Send'
              type='button'
              // onClick={sendMessage} 
              />
        </div>
      {/* BUTTON - SEND - END*/}
      </form>
    </div>
  )
}

export default InputMessage