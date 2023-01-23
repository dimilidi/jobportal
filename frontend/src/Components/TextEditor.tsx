import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import parse from 'html-react-parser'

type Props ={
    description: String
    setDescription: (value: String) => void
}

const FormatedText = (myDescription:any) => {
  return {
    __html: `${myDescription}`
  }
}

const parsedText = (description:any) =>{
  console.log("desc"+description);
  return parse(description);
}

const Editor = (props:Props) => {

  const placeholder = 'Your description...'
  const modules = {
    toolbar: {
      container: [
        [{ align: '' }, { align: 'center'}, { align: 'right' }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { list: 'ordered' },
          { list: 'bullet'}
        ],
      ],
    }
  }
  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
  ];

  const { quill, quillRef, Quill } = useQuill({
    modules,
    formats,
    placeholder
  })

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        props.setDescription(quill.root.innerHTML)
      })
    }
  }, [quill])

  return (
    <div style={{width: '100%'}}>
      <div ref={quillRef} />
      <div className="fotmated" dangerouslySetInnerHTML={FormatedText(props.description)} />
    </div>
  )
}
export default Editor

//dangerouslySetInnerHTML is React’s replacement for using innerHTML
// Set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key.

