import React, { useState } from 'react'

type Props ={
    file: any
    setFile: (value: any) => void
}

const FileUploader =(props:Props) => {
  const [errorMessage, setErrorMessage] = useState('')

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      return
    }
    // const setFileToBase = (file: File) => {
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onloadend = () => {
    //     props.setFile(reader.result)
    // }
    props.setFile(selectedFile) 

    // ACCEPT ONLY PDF OR DOC FILE
    const fileEnd = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')+1)
    if(fileEnd !== 'pdf' && fileEnd !== 'doc'){
      setErrorMessage('please upload a pdf or doc file')
      return
    }
    setErrorMessage('')
  }
  

  return (
    <>
    <label htmlFor="file-upload" className=" text-lightGray rounded-md p-1 cursor-pointer"> 
      <input type='file'
      className='' 
      onChange={handleFileUpload} id="file-upload" accept='.pdf, .doc'
      />
    </label>
    {errorMessage && <p className='text-rot'>{errorMessage}</p>}
    {props.file && (
        <a 
        href={URL.createObjectURL(props.file)} 
        target="_blank" 
        className=' underline text-lightGray pb-5'>
          View your file here
        </a>
      )}
    </>
  )
}

export default FileUploader
