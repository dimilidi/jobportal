import useUser, { UserProvider } from './Hooks/useUser'
import { SearchProvider } from './Hooks/useSearch'
// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'
import { SocketProvider } from './Hooks/useMessenger'


function App() {

  const {user} = useUser()
  console.log('UUUUUUUUU',user);
  

  return (
    <SocketProvider>
    <SearchProvider>
      <UserProvider>
        <Layout className=' bg-background min-h-screen relative'>
          <SmoothPages />
        </Layout>
      </UserProvider>
    </SearchProvider>
    </SocketProvider>

  )
}

export default App
