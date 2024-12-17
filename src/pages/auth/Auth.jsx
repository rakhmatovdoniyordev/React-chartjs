import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStore } from '../../zustand'

const Auth = () => {
    const accesToken = useStore(state => state.token)
  return accesToken ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth