import useUser, { UserProvider } from './Hooks/useUser'
import { SearchProvider } from './Hooks/useSearch'
// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'
import useMessenger from './Hooks/useMessenger'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  const {setCurrentChat} = useMessenger()
  const location = useLocation()
  
  // Close Chat Box if user is not on /message page
  useEffect(() => {
    location.pathname !== '/message' && setCurrentChat(null)
  },[location])
  

  return (
   
    <SearchProvider>
      <UserProvider>
        <Layout className=' bg-background min-h-screen relative'>
          <SmoothPages />
        </Layout>
      </UserProvider>
    </SearchProvider>
  
  )
}

export default App
