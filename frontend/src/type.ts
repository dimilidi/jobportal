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

export type RegisterInputs = {
  name: string
  email: string
  password: string
}

export type LoginInputs = Omit<RegisterInputs, 'name'>

export type EditInputs = Omit<User, '_id' & 'email'>
