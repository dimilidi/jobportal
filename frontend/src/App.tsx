import { UserProvider } from './Hooks/useUser'
import { SearchProvider } from './Hooks/useSearch'
// Components
import Layout from '../src/Components/Layout'
import SmoothPages from './Components/SmoothPages'
import Modal from './Components/Modal'
import { useState } from 'react'

function App() {
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
