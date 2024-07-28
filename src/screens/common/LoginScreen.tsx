import { LoginView } from '@/views'
import React from 'react'

const LoginScreen: React.FC = () => {
  return (
    <div className='fixed z-[998] flex justify-center w-full h-screen  overflow-y-auto'>
      <img
        className="fixed w-[100vw] z-[-1] opacity-30"
        src="./bg/login.svg" />
      <LoginView />
    </div>
  )
}

export default LoginScreen