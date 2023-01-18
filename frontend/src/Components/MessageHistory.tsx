import { useEffect, useState } from 'react'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'

type Props = {
  messages: []
  text: string
}

function MessageHistory( {messages, text}:Props) {
  const user = useUser().user
  const chat = useMessenger()



  return (

    <div>

      {/* LINE-BOX */}
      <div
        className='w-[260px] h-[170px]
          md:w-[400px] xl:h-[250px]
          border-y-2 border-darkBeige'> 
          {/* {messages.map((m) => <p>{m}</p>)} */}
      </div>
     

    </div>
  )
}

export default MessageHistory