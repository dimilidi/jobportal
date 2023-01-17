import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { AxiosResponse } from 'axios'
import axiosInstance from '../api/axiosInstance'
import { User, RegisterInputs, LoginInputs, EditInputs } from '../type'
import { getErrorArray } from '../utils/getErrorArray'
import useSearch from './useSearch'

type PromiseResult = {
  status: number
  errors?: string[] | undefined[] | undefined
}

type UserHook = {
  user: User | null
  loading: boolean
  isLoggedIn: boolean
  register: (params: RegisterInputs) => Promise<PromiseResult>
  login: (params: LoginInputs) => Promise<PromiseResult>
  logout: () => void
  editAccount: (params: EditInputs) => Promise<PromiseResult>
  deleteAccount: () => void
}

const UserContext = createContext<UserHook>({
  user: null,
  loading: false,
  isLoggedIn: false,
  register: async () => {
    return {
      status: 500,
    }
  },
  login: async () => {
    return {
      status: 500,
    }
  },
  logout: () => null,
  editAccount: async () => {
    return {
      status: 500,
    }
  },
  deleteAccount: () => null,
})

export const UserProvider = (props: { children: React.ReactElement }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setSearchWord, setSearchCategory } = useSearch()
  console.log('user', user)
  console.log('loading', loading)
  console.log('isLoggedIn', isLoggedIn)

  // Check if user is logged in, if yes, setUser. If not, return null.
  useEffect(() => {
    if (!isLoggedIn && loading) {
      const getUser = (async () => {
        try {
          const response: AxiosResponse<any, any> = await axiosInstance.get(
            '/user'
          )
          setUser(response.data)
          setIsLoggedIn(true)
        } catch (err) {
          setUser(null)
        }
        setLoading(false)
      })()
    }
  }, [isLoggedIn, loading, user])

  const userContext = {
    user: user,
    loading: loading,
    isLoggedIn: isLoggedIn,
    register: async (inputs: RegisterInputs) => {
      try {
        const response: AxiosResponse<any, any> = await axiosInstance.post(
          '/user/register',
          inputs
        )
        setUser(response.data)
        setIsLoggedIn(true)
        return {
          status: response.status,
        }
      } catch (err: any) {
        if (err.response && err.response.status === 400) {
          const errors = getErrorArray(err.response.data.message)
          return {
            status: 400,
            errors: errors,
          }
        }
        return {
          status: 500,
        }
      }
    },
    login: async (inputs: LoginInputs) => {
      try {
        const response: AxiosResponse<any, any> = await axiosInstance.post(
          '/user/login',
          inputs
        )
        console.log(response)
        setUser(response.data)
        setIsLoggedIn(true)
        return {
          status: response.status,
        }
      } catch (err: any) {
        console.log(err)
        if (err.response && err.response.status === 401) {
          return {
            status: 401,
          }
        } else if (err.response && err.response.status === 400) {
          const errors = getErrorArray(err.response.data.message)
          return {
            status: 400,
            errors: errors,
          }
        } else {
          return {
            status: 500,
          }
        }
      }
    },
    logout: async () => {
      await axiosInstance.get('/user/logout')
      setUser(null)
      setSearchWord('')
      setSearchCategory('all')
    },
    editAccount: async (inputs: EditInputs) => {
      try {
        const response: AxiosResponse<any, any> = await axiosInstance.put(
          '/user/edit-account',
          inputs
        )
        setUser(response.data)
        return {
          status: response.status,
        }
      } catch (err: any) {
        console.log(err)
        if (err.response && err.response.status === 401) {
          return {
            status: 401,
          }
        } else if (err.response && err.response.status === 400) {
          const errors = getErrorArray(err.response.data.message)
          return {
            status: 400,
            errors: errors,
          }
        } else {
          return {
            status: 500,
          }
        }
      }
    },
    deleteAccount: async () => {
      await axiosInstance.delete('/user/delete-account')
      setUser(null)
    },
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
