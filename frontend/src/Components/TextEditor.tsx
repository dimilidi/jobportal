import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

type Props ={
    description: string
    setDescription: (value: any) => void
}


const TextEditor = (props:Props) => {

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
    placeholder,
    // defaultValue: props.description
  })

  useEffect(() => {
    if (quill) {
      setTimeout(() => {
        quill.on("text-change", () => {
          console.log('DESC UE: ',props.description);
          props.setDescription(quill.root.innerHTML)
        })
      }, 1000);
    }
  }, [quill])

  return (
    <div style={{width: '100%',}}>
      <div ref={quillRef} />
    </div>
  )
}
export default TextEditor


