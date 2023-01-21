import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import ScrollToBottom from 'react-scroll-to-bottom'


function MessageHistory( ) {
  const user = useUser().user
  const {messages, typing} = useMessenger()
  console.log(messages)

  return (

    <div className='w-full'>

      {/* LINE-BOX */}
      <div
        className=' px-3 w-full h-[300px] 
          border-y-2 border-darkBeige sm:h-[400px]'> 
          <ScrollToBottom className='pb-3 h-full w-full  overflow-x-hidden'>
          {messages && 
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
            })}
       
            {typing && <p>Typing...</p>}
            </ScrollToBottom>
          
      </div>
     

    </div>
  )
}

export default MessageHistory