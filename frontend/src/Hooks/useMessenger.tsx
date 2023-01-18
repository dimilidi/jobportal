// context ist eine wrapper komponente, kein parent zu child vh, kann von überall aus gerufen werden, unabhängig von hierarchie, immer verfügbar
// user, socket kommen in context da ständige verfügbarkeit notwendig ist
// create context, useContext

import { io } from "socket.io-client";
import React, { createContext, useState, useContext } from "react";
import { messageContext } from "../type";

// implicit type assignment:
export let socket: any;

// erstelle context, speichert werte -> value (weiter unten) ist der wert der automatisch in context gespeichert wird
// welches argument erwartet ts von createContext
export const SocketContext = createContext<messageContext>({connect: () => {}, sendMessage: () => {}, isConnected: false})

// props=app(child)
export function SocketProvider (props: {children: React.ReactElement}) {

  const [isConnected, setIsConnected] = useState(false)

  // muss nur einmal eröffnet werden
  function connect (id: string) {
    // baue verbindung zu websocket server auf
    socket = io("localhost:3001")
    socket.on("connect", () => {
      // console.log("connected");
      socket.emit("joinRoom", id)
    })
    // receive 
    socket.on("message", (value: string) => {
      console.log(value)
    })
    setIsConnected(true)
  }

  function sendMessage (text: string, receiver: number) {
    // emit schickt immer ins BE, egal ob im backend aufgefangen wird oder nicht
    // das event für emit kann beliebig benannt werden
    // mitgesendet als argument wird jegliche beliebige information. in diesem fall ein objekt mit text und receiver
    socket.emit("message", {text, receiver}) 
  }

  const exportData = {
    connect,  
    sendMessage,
    isConnected,
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