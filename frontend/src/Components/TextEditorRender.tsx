import React from 'react'
import useAds from '../Hooks/useAd'


function TextEditorRender() {
    const {ad} = useAds() 

    const FormatedText = (myDescription:string | undefined) => {
        return {
          __html: `${myDescription}`
        }
      }
      return (
        <div className='h-full w-full'>
          <div className="ql-editor h-full w-full  " dangerouslySetInnerHTML={FormatedText(ad?.description)} />
        </div>
      )
}

export default TextEditorRender