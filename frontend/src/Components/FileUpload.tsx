import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheckSquare } from "react-icons/fa"
import { motion } from 'framer-motion'
import { MdOutlineAddAPhoto } from "react-icons/md"
import useUser from '../Hooks/useUser'
import { RiDeleteBinLine } from 'react-icons/ri'
import { VscNewFile } from 'react-icons/vsc'


type Props = {
  file: any
  setFile: (value: any) => void
  fileName: string
  setFileName: (file:string) => void
}


// FILE UPLOADER COMPONENT
const FileUploader: React.FC<Props> = ({ file, setFile, fileName, setFileName }) => {

  const user = useUser()

  const [open, setOpen] = useState(false)


  console.log('FILE',file);

  const handleFileChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    files && setFileToBase(files[0])
    files && setFileName(files[0].name)

    files && console.log(files[0])
  }

  const setFileToBase = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFile(reader.result)
    }
    user.user?.file !== '' && setOpen(!open)
  }


 // EDIT FILE
  const editFile = () => {
    setOpen(!open)
  }

  // REMOVE FILE
 
    const deleteFile = () => {
    setFile('')
    setFileName('')
    setOpen(!open)
  }

 
  return (
  
    <div className='flex flex-col '>
        <h3
          className='
          hidden md:inline-block
          self-start
          font-regular text-lightGray  
          sm:text-[1.1rem] 
          lg:self-start'
        >
          File
        </h3>

        <p 
          className='truncate underline  w-full h-[40px] mb-2 px-3 py-[5px]  
          box-border border border-lightGray rounded-[15rem] 
          text-sm text-gray border-opacity-[50%]
          min-[425px]:py-[8px] 
          sm:text-[1rem]
        '
        >
          {fileName ? fileName : file}
        </p>
     {/*  Edit File */}
       {/* If no file, choose file */}
       {user?.user?.file === '' && 
    <div 
      className='w-[120px] h-[40px]  flex items-center justify-center self-end z-20 text-lightGreen text-[14px] rounded-full bg-white  border-2 border-lightGreen hover:border-darkGreen hover:text-darkGreen   ease-in-out duration-300 shadow-lg cursor-pointer  '>
      <input
         style={{ display: 'none' }}
         type='file'
         name='doc'
         id='file_upload'
         onChange={handleFileChange}
       />

     <motion.label
     className='cursor-pointer'
        htmlFor='file_upload'
       whileTap={{ scale: 0.8 }}
       transition={{ duration: 0.5 }}
       onClick={()=>user?.user?.file !== '' && editFile()}
       
     >
      Choose File
     </motion.label>
     </div>
     }
     
     {/* If there is a file, open edit file drop-down  */}
     {user?.user?.file !== '' && 
      <div
      onClick={()=>user?.user?.file !== '' && editFile()} 
      style={{display: open ? 'none' : 'flex'}}
      className='w-[120px] h-[40px]  flex items-center justify-center self-end z-20 text-lightGreen text-[14px] rounded-full bg-white  border-2 border-lightGreen hover:border-darkGreen hover:text-darkGreen   ease-in-out duration-300 shadow-lg cursor-pointer'>
     <motion.button
       type='button'
       whileTap={{ scale: 0.8 }}
       transition={{ duration: 0.5 }}
       
     >
       Edit File
     </motion.button>
     
   </div>
   }


   {open && (
     <div
     onClick={(e) => e.stopPropagation()}
     className=' w-[120px]   p-[8px] self-end z-40 bg-background shadow-standard rounded-md flex justify-center gap-5 '
       
     >
       <input
         style={{ display: 'none' }}
         type='file'
         name='doc'
         id='file_upload'
         onChange={handleFileChange}
       />
       <motion.label
         htmlFor='file_upload'
         whileTap={{ scale: 0.8 }}
         transition={{ duration: 0.5 }}
         className='cursor-pointer text-[24px] text-darkGreen hover:text-lightGreen'
       >
         <VscNewFile />
       </motion.label>
       <button
         type='button'
         className='cursor-pointer text-[24px] text-darkGreen hover:text-lightGreen'
         onClick={deleteFile}
       >
         <RiDeleteBinLine />

       </button>
     </div>
   )}
   </div>

  )
    
}


export default FileUploader