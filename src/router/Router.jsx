import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}></Route>
    </Routes>
  )
}

export default Router