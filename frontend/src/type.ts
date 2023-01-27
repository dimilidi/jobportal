
export type User = {
  _id: string 
  name: string | undefined
  profession?: string | undefined
  email: string | undefined
  avatar?: string | undefined
  city: string | undefined
  description: string | undefined | []
  phone: string | undefined
}

export type Ad = {
  _id: string
  title: string
  category: string
  sector: string
  description: string
  location: string
  wage: number
  contactVia: string
  views: number
  createdAt: Date
  user: {
    _id: string
    name?: string
    email?: string
    phone?: string
    city?: string
    avatar?:string
  }
  // ref?:HTMLDivElement
  // index?:any
}

export type RegisterInputs = {
  name: string
  email: string
  password: string
}

export type LoginInputs = Omit<RegisterInputs, 'name'>

export type EditInputs = {
  name: string | undefined
  sector?: string | undefined
  avatar?: string | undefined
  city: string | undefined
  description: string | undefined
  phone: string | undefined
}


export type Chat = {
  _id:string
  receiverId: string
  senderId: string

}

export type messageContext = {
  connect:(id: string) => void, 
  sendMessageToSocket: (data:{}) => void
  receiveMessageFromSocket: (data:{}) => void
  // sendMessage:({}) => void,
  // joinChat: (id:string) => void
  isConnected: boolean,
  setIsConnected: (isConnected: boolean) => void
  messages: [] | any
  setMessages: (messages:[] | any) => void
  sendMessage: {}
  setSendMessage: ({}) => void
  receiveMessage: {} | any
  setReceiveMessage: (receiveMessage:{}) => void
  currentChat: {members:any, _id:string}
  setCurrentChat: (currentChat: null | {}) => void
  onlineUsers: [] | null,
  chats: [] | any | null
  setChats: (chat:any | null) => void
  c:   {} | null,
  setC: (c:null) =>  void
  

  // setMessages: ((prevState:
  //   [
  //   {message:
  //     {room: string; 
  //       author: string | undefined; 
  //       message: string; time: string;
  //     }, 
  //     received: boolean 
  //   }]
  //   ) => void)
  typing: boolean
  // room: string
  // setRoom: (room:string) => void
  
}