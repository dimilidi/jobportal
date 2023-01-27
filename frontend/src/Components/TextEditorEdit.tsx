import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import useAds from '../Hooks/useAd'

type Props ={
    description: string
    setDescription: (value: any) => void
}

const Editor = (props:Props) => {
  const {ad} = useAds() 
  const [newAd,setNewAd] = useState<any>(ad?.description)

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
  })

  useEffect(() => {
    if (typeof quill !== 'undefined' && ad?.description) {
      quill.root.innerHTML = ad?.description
    } else if (typeof quill !== 'undefined') {
      quill.root.innerHTML = ''
    }
    if(typeof quill !== 'undefined'){
      quill.on("text-change", () => {
        props.setDescription(quill.root.innerHTML) 
      })
    }
  }, [quill, ad])

  return (
    <div style={{width: '100%'}}>
      <div ref={quillRef} />
    </div>
  )
}
export default Editor
