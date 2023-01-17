import useUser from '../Hooks/useUser'
import UniButton from '../Components/UniButton'

function InputMessage() {
  const user = useUser().user
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
            // onChange={}
            // value={}
          />
        </div>

      {/* BUTTON - SEND */}
      <div
        className='flex justify-center items-center mb-10'>
        <UniButton
              area-label='SendMessageButton'
              text='Send'
              type='button'
            //  onClick={}
              />
        </div>
        {/* BUTTON - SEND - END*/}
      </form>
    </div>
  )
}

export default InputMessage