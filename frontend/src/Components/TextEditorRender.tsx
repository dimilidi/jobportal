import React from 'react'
import useAds from '../Hooks/useAd'


function TextEditorRender() {
    const {ad} = useAds() 

    const FormatedText = (myDescription:any) => {
        return {
          __html: `${myDescription}`
        }
      }
      return (
        <div>
          <div className="ql-editor" dangerouslySetInnerHTML={FormatedText(ad?.description)} />
        </div>
      )
}

export default TextEditorRender