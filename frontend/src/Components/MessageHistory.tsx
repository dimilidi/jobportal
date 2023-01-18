import { useEffect, useState } from 'react'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'

// type Props = {
//   messages: []

// }

function MessageHistory( ) {
  const user = useUser().user
  const {messages} = useMessenger()
  console.log('Msg',messages);
  



  return (

    <div>

      {/* LINE-BOX */}
      <div
        className='w-[260px] h-[170px] 
          md:w-[400px] xl:h-[250px]
          border-y-2 border-darkBeige'> 
          {messages && messages.map((value, i) => <p style= {{textAlign: value['received'] ? 'left' : 'right'}} key={i}>{value['message']}</p>)}
      </div>
     

    </div>
  )
}

export default MessageHistory