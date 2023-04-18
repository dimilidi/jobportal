// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import { useLocation, useParams} from 'react-router-dom'
import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { messageContext } from "../type";
import useAd from "./useAd";
import useUser from "./useUser";
import axiosInstance from "../api/axiosInstance";
import { notify } from "../utils/toastNotification";


export let socket: any;
socket = io("https://jobportal-jobsy.onrender.com" )
//socket = io("localhost:3001" )


export const SocketContext = createContext<messageContext>({
  connect: () => {}, 
  sendMessageToSocket: () => {} , 
  receiveMessageFromSocket: () => {}, 
  setSendMessage: () => {}, 
  sendMessage: {}, 
  receiveMessage: {},
  setReceiveMessage: () => {},
  isConnected: false, 
  setIsConnected: () => false,
  messages: [], 
  setMessages: () => [], 
  typing: false,
  currentChat: {members:[], _id: ''},
  setCurrentChat: () => {},
  onlineUsers: [],
  chats: [],
  setChats: () => [],
  c: {members:[]},
  setC: () => {},
  notification: [],
  setNotification: () => []
})

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {
  
  const user = useUser()
 

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any>([])
  const [typing, setTyping] = useState(false)
  const [room, setRoom ] = useState('')
  const [onlineUsers, setOnlineUsers ] = useState<any>([])
  const [sendMessage, setSendMessage] = useState({})
  const [receiveMessage, setReceiveMessage] =useState<any | {} | null>(null)
  const [currentChat, setCurrentChat] = useState<any>(null)
  const [chats, setChats] = useState<any[]>([])
  const [c, setC] = useState<any | null >({})
  const [notification, setNotification] = useState<any | null | []>([])

 

// Connect to Socket 
  function connect (id: string) {
    socket.emit('new-user-add', id) //user._id
    socket.on('get-users', (users:[]) => {
      setOnlineUsers(users)
    })
  setIsConnected(true)
  }
  
  // Send message to Socket Server
  function sendMessageToSocket(data:any) {
      socket.emit("send-message", data) 
    
  }

  // Receive message from Socket Server
    function receiveMessageFromSocket(data:{}) {
    if(!socket) return
    socket.on("receive-message", (data:any) => {
      setReceiveMessage(data.text)
      setMessages([...messages, receiveMessage])

    }) 
  } 


  socket.on("typing-started-from-server", () => setTyping(true))
  socket.on("typing-stopped-from-server",() => setTyping(false))

   
  const exportData = {
    connect,  
    sendMessage,
    setSendMessage,
    receiveMessage,
    setReceiveMessage,
    isConnected,
    setIsConnected,
    messages,
    setMessages,
    sendMessageToSocket,
    receiveMessageFromSocket,
    typing,
    currentChat,
    setCurrentChat,
    onlineUsers,
    chats, 
    setChats,
    c, 
    setC,
    notification,
    setNotification
  }


    // Receive Message from the Socket Server + Notification
    useEffect(() => {
      socket.on("receive-message", (data:any) => {
      setReceiveMessage(data)
    })
     },[socket])


    useEffect(() => {
      console.log(notification);
      
      // if there is new Message and if chat is closed, or if current chat with other user, notify unread message
      if(!currentChat || currentChat._id !== receiveMessage.chatId) {
        if(!notification.includes(receiveMessage)){
          setNotification([receiveMessage, ...notification])
          // getChats()
        }
      }else {
        setMessages([...messages, receiveMessage])
      }
    }, [receiveMessage])



    
  return (
    <SocketContext.Provider value={exportData}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default function useMessenger () {
  return useContext(SocketContext)
}