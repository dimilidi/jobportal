import useUser from '../Hooks/useUser'

function MessageHistory() {
  const user = useUser().user
  return (

    <div>

      {/* LINE-BOX */}
      <div
        className='w-[260px] h-[170px]
          md:w-[400px] xl:h-[250px]
          border-y-2 border-darkBeige'>
      </div>

    </div>
  )
}

export default MessageHistory