// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import {useParams} from 'react-router-dom'
import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { chatContext } from "../type";
import useAd from "./useAd";
import useUser from "./useUser";
import axiosInstance from "../api/axiosInstance";
import { notify } from "../utils/toastNotification";


export let socket: any;
socket = io("localhost:3001")


export const SocketContext = createContext<chatContext>({
  connect: () => {}
  // sendMessageToSocket: () => {} , 
  // receiveMessageFromSocket: () => {}, 
  // setSendMessage: () => {}, 
  // sendMessage: {}, 
  // receiveMessage: {},
  // setReceiveMessage: () => {},
  // isConnected: false, 
  // setIsConnected: () => false,
  // messages: [], 
  // setMessages: () => [], 
  // typing: false,
  // currentChat: {members:[], _id: ''},
  // setCurrentChat: () => {},
  // onlineUsers: [],
  // chats: [],
  // setChats: () => [],
  // c: {members:[]},
  // setC: () => {},
  // joinChat: () => {}, 
  // setRoom: () => '', room:'' 
})

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {
  
  const params = useParams()
  const user = useUser()

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any>([])
  const [typing, setTyping] = useState(false)
  const [room, setRoom ] = useState('')
  const [onlineUsers, setOnlineUsers ] = useState<any>([])
  const [sendMessage, setSendMessage] = useState({})
  const [receiveMessage, setReceiveMessage] =useState<any | {} | null>({})
  const [currentChat, setCurrentChat] = useState<any>(null)
  const [chats, setChats] = useState<any[]>([])
  const [c, setC] = useState<any | null >({})

 


  
// Connect to Socket 
  function connect () {
    console.log('Connect');
    return 'CONNECT'
    
  //   socket.emit('new-user-add', id) //user._id
  //   socket.on('get-users', (users:[]) => {
  //     setOnlineUsers(users)
  //   })
  // setIsConnected(true)
  }

 

   
  const exportData = {
    connect

  }
  





  return (
    <SocketContext.Provider value={exportData}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default function useChat () {
  return useContext(SocketContext)
}