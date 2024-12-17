import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/auth/Auth'
import Dashboard from '../pages/Dashboard/Dashboard'
import Layout from '../pages/layout/Layout'
import Login from "../pages/login/Login"

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Auth/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Router