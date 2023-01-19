import React  from 'react';
import { useEffect, useState , useRef} from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'


type Props ={
    description: String
    setDescription: (value:string) => void
}
function TextEditor(props:Props) {

    // const modules = {
    //     toolbar: [
    //         ['bold', 'italic', 'underline'],
    //         [{ list: 'ordered' }, { list: 'bullet' }],
    //     ]
    // }
    const placeholder = 'Your description...'

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(placeholder)

            quill.on('text-change', () => {
            props.setDescription(quillRef.current.firstChild.innerHTML)

            console.log(quillRef.current.firstChild.innerHTML);
          });
        }
      }, [quill])

      console.log('this is description', props.description)


  return (
    <div>
        <div className='w-full mt-3 mb-3  rounded-xl resize-none caret-gray  border-lightGray border-opacity-50 focus:outline-none placeholder:text-sm placeholder:text-lightGray  lg:w-full  lg:mb-0 lg:rounded-3xl lg:placeholder:text-base '>
            <div 
            ref={quillRef}
            />

        </div>
    </div>
  )
}


export default TextEditor




