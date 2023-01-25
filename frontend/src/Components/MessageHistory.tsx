import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import ScrollToBottom from 'react-scroll-to-bottom'
import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import {format} from 'timeago.js'

type Props = {
  currentChat: any | null
}

function MessageHistory( {currentChat}:Props) {
  const user = useUser().user
  const {messages, setMessages, typing, receiveMessage} = useMessenger()

  

  const fetchMessages = async () => {
    try {
      const {data} = await axiosInstance.get(`/message/${currentChat?._id}`)
      // console.log(data);
      
      setMessages(data)
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   if(currentChat != null) fetchMessages()
  }, [currentChat])

  messages && console.log('MEEEEEEEEEEEEEESSAGES',messages)

  return (

    <div className='w-full h-full'>
      {/* LINE-BOX */}
      <div
        className=' p-3 pt-2 w-full h-[300px] 
          border-y-2 border-darkBeige sm:h-[400px]'> 
          <ScrollToBottom className='pb-3 h-[98%] w-full flex flex-col  overflow-x-hidden'>
          {messages && 
            messages.map((value, i) => {
          
              return (
                
              <div key={i} className='flex flex-col px-2'>

                <div 
                    style= {{alignSelf: value['senderId'] !== user?._id  ? 'start' : 'end',}} 
                >
                  <p 
                    style= {{ color: value['received'] ? 'green' : 'purple'}} 
                    className='text-sm font-bold capitalize'>{value['author']}
                  </p>
                  <p 
                    className='text-lightGray  text-sm capitalize'>{format(value['createdAt'])}
                  </p>
                
                <div 
                    className='mt-1 px-3 py-1 w-fit min-w-[100px]  border-2 border-darkBeige rounded-lg'
                >
                  <div className=''> 
                    <p 
                    className='p-[2px] overflow-x-hidden break-all text-lg'
                    >
                      {value['text']}
                    </p>
                  </div> 
                  {/* <div className='flex gap-3 justify-end'>
                    <p className='text-lightGray text-sm'>{value['message']['time']}</p>
                  </div>  */}
                </div>
                </div>

               </div> 
                 
              )
            })
            }

          {/* {messages && 
            messages.map((value, i) => {
              return (
              <div key={i} className='flex flex-col px-2'>
                <div 
                    style= {{alignSelf: value['received'] ? 'start' : 'end',}} 
                >
                  <p 
                    style= {{ color: value['received'] ? 'green' : 'purple'}} 
                    className=' text-sm font-bold capitalize'>{value['message']['author']}
                  </p>
                  <p 
                    className='text-lightGray  text-sm capitalize'>{value['message']['date']}
                  </p>
                
                <div 
                    className='mt-1 px-3 py-1 w-fit min-w-[100px]  border-2 border-darkBeige rounded-lg'
                >
                  <div className=''> 
                    <p 
                    className='p-[2px] overflow-x-hidden break-all text-lg'
                    >
                      {value['message']['message']}
                    </p>
                  </div>
                  <div className='flex gap-3 justify-end'>
                    <p className='text-lightGray text-sm'>{value['message']['time']}</p>
                  </div>
                </div>
                </div>

              </div> 
              
              )
            })} */}
       
            {typing && <p className='m-3 h-[50px] self-end justify-end text-lightGray text-right'>Typing...</p>}
            </ScrollToBottom>     
      </div>
   </div>
  )
}

export default MessageHistory