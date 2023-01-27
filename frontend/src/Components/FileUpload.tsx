import React, { useState } from 'react'

type Props ={
    file: string
    setFile: (value: any) => void
}

const FileUploader =(props:Props) => {
//   const [file, setFile] = useState(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      return;
    }
    console.log(selectedFile)
    props.setFile(selectedFile)
  };

  return (
    <>
    <label htmlFor="file-upload" className=" bg-lightGreen text-white rounded-md p-1 cursor-pointer"> choose file
     </label>
      <input type="file" onChange={handleFileUpload}/>
      {props.file && (
        <a 
        href={URL.createObjectURL(props.file)} 
        target="_blank" 
        className=' underline text-lightGray pb-5'>
          View your file here
        </a>
      )}
    </>
  );
};

export default FileUploader;
