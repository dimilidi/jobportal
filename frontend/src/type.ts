export type User = {
  _id: string | undefined
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
  createdAt: Date
  user: {
    _id: string
    name?: string
    email?: string
    phone?: string
    city?: string
    avatar?:string
  }
  ref?:HTMLDivElement
  index?:any
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
