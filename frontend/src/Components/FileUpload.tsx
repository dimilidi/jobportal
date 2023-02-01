import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCheckSquare } from "react-icons/fa"
import { motion } from 'framer-motion'
import { MdOutlineAddAPhoto } from "react-icons/md"
import useUser from '../Hooks/useUser'

type Props = {
  file: any
  setFile: (value: any) => void
  fileName: string
  setFileName: (file:string) => void
}


// FILE UPLOADER COMPONENT
const FileUploader: React.FC<Props> = ({ file, setFile, fileName, setFileName }) => {

  const user = useUser()

  console.log('FILE',file);
  

  // const [fileName, setFileName] = useState<any>()



  // const [files, setFiles] = useState<any[]>(JSON.parse(localStorage.getItem('files') || '[]'))
  const [inputRef, setInputRef] = useState<any>()

  // useEffect(() => {
  //   localStorage.setItem('files', JSON.stringify(files))
  // }, [files])

  const handleFileChange = (event: any) => {
    // MAX 1 FILES
    // if (files.length >= 1) return
      
    const selectedFile = event.target.files[0]
    setFileName(selectedFile.name)
    // console.log('???????????????????',selectedFile);
 
    

    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
      setFile(reader.result)
      console.log(reader.result)
      setFileName(selectedFile)
      // setFiles([...files, { name: selectedFile.name, file: reader.result }])
      // console.log('file name: ',selectedFile.name, 'all files: ', ...files)
    }
  }

  // REMOVE FILE

  const handleRemoveFile = () => {
    setFile('')
    // const newFiles = [...files]
    // newFiles.splice(index, 1)
    // setFiles(newFiles)
    // localStorage.removeItem('files')
    // localStorage.setItem('files', JSON.stringify(newFiles))

  }
  
  // const handleRemoveFile = (index: number) => {
    
  //   const newFiles = [...files]
  //   console.log('before: ',newFiles)
  //   newFiles.splice(index, 1)
  //   setFiles(newFiles)
  //   console.log('after',newFiles)
  //   localStorage.removeItem('files')
  //   localStorage.setItem('files', JSON.stringify(newFiles))
  //   console.log('after local remove', newFiles)

  // }

  // CLEAR INPUT 
  const clearInput = () => {
    setFile('')
    // inputRef.value = null
  }




  return (
    <div aria-label='file-upload-container'>
      <p className='text-[12px] text-gray text-opacity-50 text-center leading-[12px] pb-2'>Add your CV or Cover Letter to get more job opportunities (1 file, max 50kB)</p>
      <div className='flex flex-row justify-center'>
      {/* FILE INPUT */}
      <input
        style={{ display: 'none' }}
        id='file-upload-container'
        type='file'
        accept='.pdf, .doc'
        className='w-full text-gray text-sm'
        onChange={handleFileChange}
        ref={(ref) => setInputRef(ref)}
      />
      
      <motion.label
        htmlFor='file-upload-container'
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='cursor-pointer text-[15px] font-medium underline text-darkGreen hover:text-lightGreen'
      >
        Choose file
      </motion.label>


      {/* CLEAR INPUT */}
      {
        file &&  
        <button
        className='text-xs px-1 rounded-md text-darkGreen hover:text-lightGreen' 
        onClick={clearInput}><FaCheckSquare/>
        </button>
      }
      </div>
      <div>
      {/* {
        // files.map((file, i) => ( */}
          <div className='flex justify-center'>
            <p 
            className='underline text-lightGray text-[13px]'
            >

              {fileName ? fileName : user?.user?.file}

            </p>
            <FaTrashAlt
              className='text-xs mt-1 mx-1 cursor-pointer text-darkGreen hover:text-lightGreen'
              onClick={()=>handleRemoveFile()}
            />
          </div>
        {/* // ))
      // } */}
    </div>
    </div>
  )
}


export default FileUploader