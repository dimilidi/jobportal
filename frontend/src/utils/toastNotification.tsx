import { ReactNode } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 

export const notify = (message:string | ReactNode) => {
  const customId = "custom-id-yes"
  toast(message, {
    toastId: customId
  })
}