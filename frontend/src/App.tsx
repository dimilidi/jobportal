import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { UserProvider } from './Hooks/useUser'

// Components
import Layout from '../src/Components/Layout'
import Account from './Pages/Account'
import AdsList from './Pages/AdsList'
import AuthRequired from './Pages/AuthRequired'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import PostAd from './Pages/PostAd'
import Register from './Pages/Register'
import SingleAd from './Pages/SingleAd'
import AdMobile from './Components/AdMobile'

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <Layout className='bg-background min-h-screen'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/adslist' element={<AdsList />} />
            <Route path='/ad/:id' element={<SingleAd />} />
            <Route path='/post-ad' element={<PostAd />} />
            <Route path='/account' element={<Account />} />
            <Route path='/auth-required' element={<AuthRequired />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </UserProvider>
  )
}

export default App
