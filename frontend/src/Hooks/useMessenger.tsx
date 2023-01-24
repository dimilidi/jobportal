// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { messageContext } from "../type";
import useAd from "./useAd";
import useUser from "./useUser";


export let socket: any;
socket = io("localhost:3001")


export const SocketContext = createContext<messageContext>({
  connect: () => {}, 
  sendMessageToSocket: () => {} , 
  receiveMessageFromSocket: () => {}, 
  setSendMessage: () => {}, 
  sendMessage: {}, 
  receiveMessage: {chatId:''},
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
  setChats: () => []
  // joinChat: () => {}, 
  // setRoom: () => '', room:'' 
})

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any>([{}])
  const [typing, setTyping] = useState(false)
  const [room, setRoom ] = useState('')
  const [onlineUsers, setOnlineUsers ] = useState<any>([])
  const [sendMessage, setSendMessage] = useState({})
  const [receiveMessage, setReceiveMessage] =useState<any | {chatId:''} | null>({})
  const [currentChat, setCurrentChat] = useState<any>(null)
  const [chats, setChats] = useState<any[]>([])

  
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
    // function receiveMessageFromSocket() {
    if(!socket) return
    socket.on("receive-message", (data:any) => {
      setReceiveMessage(data)
      setMessages([...messages, receiveMessage])

    }) 
  // } 

 

 
  

 
    // socket.on("message-from-server", (value:{}) => { //'message'
    //   setMessages((messages:[]) => [...messages, {message:value, received:true}])
    

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
    // receiveMessageFromSocket,
    typing,
    currentChat,
    setCurrentChat,
    onlineUsers,
    chats, 
    setChats
    // joinChat,
    // setRoom,
    // room
  }
  


  return (
    <SocketContext.Provider value={exportData}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default function useMessenger () {
  return useContext(SocketContext)
}