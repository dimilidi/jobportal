import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
// Pages
import Account from '../Pages/Account'
import AdsList from '../Pages/AdsList'
import AuthRequired from '../Pages/AuthRequired'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import PostAd from '../Pages/PostAd'
import Register from '../Pages/Register'
import SingleAd from '../Pages/SingleAd'
import EditAccount from '../Pages/EditAccount'
import DeleteAccount from '../Pages/DeleteAccount'
import EditAd from "../Pages/EditAd"
// framer-motion
import {AnimatePresence} from 'framer-motion'
import useUser from '../Hooks/useUser'
import Message from '../Pages/Message'


const SmoothPages = () => {
  const location = useLocation()
  const { user } = useUser()


  return (
    // <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/adslist' element={<AdsList />} />
            <Route path='/ad/:id' element={<SingleAd />} />
            <Route path='/ad/edit-ad/:id' element={<EditAd />} />
            <Route path='/post-ad' element={<PostAd />} />
            <Route path='/account' element={<Account />} />
            <Route path='/edit-account' element={<EditAccount />} />
            <Route path='/delete-account' element={<DeleteAccount />} />
            <Route path='/auth-required' element={<AuthRequired />} />
            <Route path='/message' element={user ? <Message /> : < AuthRequired />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    // </AnimatePresence>
  )
}

export default SmoothPages