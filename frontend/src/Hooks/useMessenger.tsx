// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { messageContext } from "../type";
import useAd from "./useAd";


// implicit type assignment:
export let socket: any;
socket = io("localhost:3001")


// erstelle context, speichert werte -> value (weiter unten) ist der wert der automatisch in context gespeichert wird
// welches argument erwartet ts von createContext
export const SocketContext = createContext<messageContext>({connect: () => {}, sendMessage: () => {}, joinChat: () => {}, isConnected: false, setIsConnected: () => false,messages: [], setMessages:   ((prevState: [{}]) => []), typing: false, setRoom: () => '', room:'' })

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any>([])
  const [typing, setTyping] = useState(false)
  const [room, setRoom ] = useState('')


  // muss nur einmal eröffnet werden
  function connect (id: string) {
    // baue verbindung zu websocket server auf
    // socket.on("connect", () => {
      // console.log("connected");
      // socket.emit("joinRoom", id)
    socket.emit('join chat', id )
    
    
    

    // })


    // receive 

    if(!socket) return


    socket.on("message-from-server", (value:{}) => { //'message'
      setMessages((messages:[]) => [...messages, {message:value, received:true}])
      
    })


    

    socket.on("typing-started-from-server", () => setTyping(true))

    socket.on("typing-stopped-from-server",() => setTyping(false))

    setIsConnected(true)
  }


   // join chat
   function joinChat(id:string) {
    // socket.emit('join chat', id )
  }


  async function sendMessage (data:{}) {
    // emit schickt immer ins BE, egal ob im backend aufgefangen wird oder nicht
    // das event für emit kann beliebig benannt werden
    // mitgesendet als argument wird jegliche beliebige information. in diesem fall ein objekt mit text und receiver
    await socket.emit("message", data) 
  }

  const exportData = {
    connect,  
    sendMessage,
    isConnected,
    setIsConnected,
    messages,
    setMessages,
    typing,
    joinChat,
    setRoom,
    room
  }

  return (
    // Provider Eigenschaft, hier wird props exportiert
    <SocketContext.Provider value={exportData}>
      {props.children}
    </SocketContext.Provider>
  )
}

export default function useMessenger () {
  return useContext(SocketContext)
}