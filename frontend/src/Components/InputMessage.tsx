import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'
import useMessenger from '../Hooks/useMessenger'

import React from 'react'

function InputMessage() {
  const user = useUser().user
  console.log("User:", user)
  const chat = useMessenger()
  console.log(chat);
  const [text, setText] = React.useState("")

  function inputHandler(e: any) {
    setText(e.target.value)
  }

  React.useEffect(() => {
    if (user?._id) {
      chat.connect(user._id)
    }
    
  },[user])

  return (
    <div>
      {/* INPUT MESSAGE */}
      <form className='flex flex-col justify-center items-center gap-4'>
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
              // onClick={} 
              />
        </div>
      {/* BUTTON - SEND - END*/}
      </form>
    </div>
  )
}

export default InputMessage