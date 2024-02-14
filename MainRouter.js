import React from 'react'
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Homepage" element={<HomePage />} />
        <Route path="Registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  )
}

export default MainRouter