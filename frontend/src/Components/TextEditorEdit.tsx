import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import useAds from '../Hooks/useAd'


type Props ={
    description: String
    setDescription: (value: String) => void
}


const Editor = (props:Props) => {

  const {ad} = useAds() 

    const FormatedText = (myDescription:any) => {
        return {
          __html: `${myDescription}`
        }
      }

  const defaultValue = ad?.description
  console.log('defaultValue: ',  defaultValue)
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
    if (quill) {
      quill.on("text-change", () => {
        quill.root.innerHTML.append(defaultValue)
      })
    }
  }, [quill])

  return (
    <div style={{width: '100%'}}>
      <div ref={quillRef} />
      <div className="ql-editor" dangerouslySetInnerHTML={FormatedText(ad?.description)} />

    </div>
  )
}
export default Editor


