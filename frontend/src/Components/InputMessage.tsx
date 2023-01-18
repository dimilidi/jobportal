import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'
import useMessenger from '../Hooks/useMessenger'

import React from 'react'
import useAd from '../Hooks/useAd'
import e from 'cors'

type Props= {
  text: string
  messages: []
  setText: (text:string) => void
  setMessages: (messages:[string]) => void
}


function InputMessage({text, setText, messages, setMessages}: Props) {
  const {user} = useUser()
  const {ad }= useAd()
  const chat = useMessenger()





  function inputHandler(e: any) {
    setText(e.target.value)
  }

  React.useEffect(() => {
    if(!chat.isConnected) return
    user && chat.emit('joinRoom', user._id)
    return chat.onMessage((message:any) => {
      console.log(message);
      
    })
   
  },[user, chat.isConnected])

  
  const sendMessage = (e:React.SyntheticEvent) => {
    e.preventDefault()
    setText('')
    ad && 
    chat.emit('message', {text, receiver: ad.user._id})
    setMessages([...messages, text ])
  }
 
 

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