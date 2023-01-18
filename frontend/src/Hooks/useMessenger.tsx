// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { messageContext } from "../type";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket } from "socket.io";

// implicit type assignment:
const client = io("localhost:3001")

// erstelle context, speichert werte -> value (weiter unten) ist der wert der automatisch in context gespeichert wird
// welches argument erwartet ts von createContext
export const SocketContext = createContext<messageContext>({ emit:() =>  undefined, onMessage:() => () => undefined,  isConnected: false})

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {

  const [isConnected, setIsConnected] = useState(false)
  const [socket, setSocket] = useState<null | Socket<DefaultEventsMap, DefaultEventsMap> >(null)
  useEffect(() => {
    client.on('connection', (socket)=> {
      setIsConnected(true)
      setSocket(socket)
    } )
  },[])

  // muss nur einmal eröffnet werden
  // function connect (id: string) {
  //   // baue verbindung zu websocket server auf
  //   socket.on("connect", () => {
  //     // console.log("connected");
  //     socket.emit("joinRoom", id)
  //   })
  //   // receive 
  //   socket.on("message", (value: string) => {
  //     console.log(value)
     
  //   })
  //   setIsConnected(true)
  //   return socket.disconnect
  // }

  function onMessage(cb:(message:any) => void) {
    if(!socket) return () => undefined
    socket.on('message', cb)
    return () => socket.off('message',cb)
  }

  function sendMessage (message:any) {
    if(!socket) return
    // emit schickt immer ins BE, egal ob im backend aufgefangen wird oder nicht
    // das event für emit kann beliebig benannt werden
    // mitgesendet als argument wird jegliche beliebige information. in diesem fall ein objekt mit text und receiver
    socket.emit("message", message) 
  }

  const exportData = { 
    isConnected,
    onMessage,
    emit: socket ? socket.emit : () => undefined
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