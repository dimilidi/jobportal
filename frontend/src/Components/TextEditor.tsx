import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

type Props ={
    description: String
    setDescription: (value: any) => void
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
    <div style={{width: '100%',}}>
      <div ref={quillRef} />
    </div>
  )
}
export default Editor


