import React from 'react'
import useAds from '../Hooks/useAd'
import Spinner from './Spinner'


function TextEditorRender() {
    const {ad} = useAds() 

    if (!ad?.description) 
    return <Spinner />

    const FormatedText = (myDescription:string | undefined) => {
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
