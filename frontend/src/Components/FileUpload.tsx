import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

type Props = {
  file: any
  setFile: (value: any) => void
}


// FILE UPLOADER COMPONENT
const FileUploader: React.FC<Props> = ({ file, setFile }) => {
  const [files, setFiles] = useState<any[]>(JSON.parse(localStorage.getItem('files') || '[]'))
  const [inputRef, setInputRef] = useState<any>()

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(files))
  }, [files])

  const handleFileChange = (event: any) => {
    // MAX 1 FILES
    if (files.length >= 1) return
      
    const selectedFile = event.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
      setFile(reader.result)
      console.log(reader.result)
      setFiles([...files, { name: selectedFile.name, file: reader.result }])
      console.log('file name: ',selectedFile.name, 'all files: ', ...files)
    }
  }

  // REMOVE FILE
  const handleRemoveFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
    localStorage.removeItem('files')
    localStorage.setItem('files', JSON.stringify(newFiles))
  }

  // CLEAR INPUT 
  const clearInput = () => {
    setFile(null)
    inputRef.value = null
  }




  return (
    <div aria-label='file-upload-container'>
      {/* FILE INPUT */}
      <input
        type='file'
        accept='.pdf, .doc'
        onChange={handleFileChange}
        ref={(ref) => setInputRef(ref)}
      />


      {/* CLEAR INPUT */}
      {
        file &&  
        <button
        className=' px-1 rounded-md text-lightGray' 
        onClick={clearInput}>Clear
        </button>
      }
      
      <p className='text-[12px] text-gray'>Add your CV or Cover Letter to get more job opportunities (1 file, max 50kB)</p>

      <div>
      {
        files.map((file, i) => (
          <div key={i} className='flex'>
            <p 
            className='underline text-lightGray '
            >
              {file.name}
            </p>
            <FaTrashAlt
              className='text-gray ml-2 cursor-pointer'
              onClick={() => handleRemoveFile(i)}
            />
          </div>
        ))
      }
    </div>
    </div>
  )
}


export default FileUploader

