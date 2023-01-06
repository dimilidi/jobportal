import { UserProvider } from './Hooks/useUser'

// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'


function App() {
  return (
    <UserProvider>
        <Layout className=' bg-background min-h-screen relative'>
          <SmoothPages />
        </Layout>
    </UserProvider>
  )
}

export default App
