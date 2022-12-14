export type User = {
  _id: string
  name: string
  sector: string
  email: string
  avatar: string
  city: string
  description: string
  phone: string
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
    name: string
    email: string
    phone: string
    city: string
  }
}

export type RegisterInputs = {
  name: string
  email: string
  password: string
}

export type LoginInputs = Omit<RegisterInputs, 'name'>

export type EditInputs = Omit<User, '_id' & 'email'>
