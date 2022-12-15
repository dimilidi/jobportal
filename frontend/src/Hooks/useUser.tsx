import React, { createContext, useContext, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import axiosInstance from '../api/axiosInstance'
import { User, RegisterInputs, LoginInputs, EditInputs } from '../type'

type UserHook = {
  user: User | null
  loading: boolean
  isLoggedIn: boolean
  // register: (params: RegisterInputs) => User | null
  //   login: (params: LoginInputs) => void;
  //   editAccount: (params: EditInputs) => void;
}

const UserContext = createContext<UserHook>({
  user: null,
  loading: false,
  isLoggedIn: false,
  // register: async () => null,
  //   login: () => null,
  //   editAccount: () => null,
})

export const UserProvider = (props: { children: React.ReactElement }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log('user', user)
  console.log('loading', loading)
  console.log('isLoggedIn', isLoggedIn)

  // Check if user is logged in, if yes, setUser. If not, return null.
  useEffect(() => {
    const getUser = async () => {
      try {
        const response: AxiosResponse<any, any> = await axiosInstance.get(
          '/user'
        )
        setUser(response.data)
        setIsLoggedIn(true)
      } catch (err) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const userContext = {
    user: user,
    loading: loading,
    isLoggedIn: isLoggedIn,
  }

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  )
}

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
