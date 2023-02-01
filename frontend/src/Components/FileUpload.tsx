import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheckSquare } from "react-icons/fa"
import { motion } from 'framer-motion'
import { MdOutlineAddAPhoto } from "react-icons/md"
import useUser from '../Hooks/useUser'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiOutlineCamera } from 'react-icons/hi'
import e from 'cors'

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

    files && console.log(files[0])
  }

  const setFileToBase = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFile(reader.result)
    }
    setOpen(!open)
  }




 // EDIT FILE
  const editFile = () => {
    setOpen(!open)
  }

  // REMOVE FILE
 
    const deleteFile = () => {
    setFile('')
    setOpen(!open)
  }

  // CLEAR INPUT 
  // const clearInput = () => {
  //   setFile('')
    // inputRef.value = null
  // }




  return (
    <>
        <p 
          className='underline text-lightGray text-[13px]'
        >

          {file}

        </p>
     {/*  Edit File */}
     <div className='h-[30px] w-[30px] mt-[-20px] mr-5 flex items-center justify-center self-end z-20 text-lightGreen text-[16px] rounded-full bg-white  border-2 border-lightGreen hover:border-darkGreen hover:text-darkGreen   ease-in-out duration-300 shadow-lg md:mt-[-30px] '>
     <motion.button
       type='button'
       whileTap={{ scale: 0.8 }}
       transition={{ duration: 0.5 }}
       onClick={editFile}
     >
       <HiOutlineCamera />
     </motion.button>
   </div>
   {open && (
     <div
       className='w-[80%] mt-[-40px]  p-[8px] mx-auto  z-30 bg-background shadow-standard rounded-md flex justify-center gap-5 '
       onClick={(e) => e.stopPropagation()}
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
         <MdOutlineAddAPhoto />
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
   </>
  )
    // <div aria-label='file-upload-container'>
    //   <p className='text-[12px] text-gray text-opacity-50 text-center leading-[12px] pb-2'>Add your CV or Cover Letter to get more job opportunities (1 file, max 50kB)</p>
    //   <div className='flex flex-row justify-center'>
    //   {/* FILE INPUT */}
    //   <input
    //     style={{ display: 'none' }}
    //     id='file-upload-container'
    //     type='file'
    //     accept='.pdf, .doc'
    //     className='w-full text-gray text-sm'
    //     onChange={handleFileChange}
    //     ref={(ref) => setInputRef(ref)}
    //   />
      
    //   <div className='flex justify-center'>
    //   <motion.label
    //     htmlFor='file-upload-container'
    //     whileTap={{ scale: 0.8 }}
    //     transition={{ duration: 0.5 }}
    //     className='cursor-pointer text-[15px] font-medium underline text-darkGreen hover:text-lightGreen'
    //   >
    //     Choose file
    //   </motion.label>


    //   {/* CLEAR INPUT */}
    //   {
    //     file &&  
    //     <button
    //     className='text-xs px-1 rounded-md text-darkGreen hover:text-lightGreen' 
    //     onClick={clearInput}><FaCheckSquare/>
    //     </button>
    //   }
    //   </div>
    //   <div>
    //   {/* {
    //     // files.map((file, i) => ( */}
    //         <p 
    //         className='underline text-lightGray text-[13px]'
    //         >

    //           {fileName ? fileName : user?.user?.file}

    //         </p>
    //         <FaTrashAlt
    //           className='text-xs mt-[6px] mx-1 cursor-pointer text-darkGreen hover:text-lightGreen'
    //           onClick={()=>handleRemoveFile()}
    //         />
    //       </div>
    //     {/* // ))
    //   // } */}
    // </div>
    // </div>
  
}


export default FileUploader