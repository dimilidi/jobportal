import { UserProvider } from './Hooks/useUser'

// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <Layout className=' bg-background min-h-screen relative'>
          <SmoothPages />
        </Layout>
      </div>
    </UserProvider>
  )
}

export default App
