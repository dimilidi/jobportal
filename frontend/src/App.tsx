import useUser, { UserProvider } from './Hooks/useUser'
import { SearchProvider } from './Hooks/useSearch'
// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'


function App() {

  const {user} = useUser()
  console.log('UUUUUUUUU',user);
  

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
