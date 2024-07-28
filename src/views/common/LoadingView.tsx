import { CircularLoader } from '@/components/common/loading'
import React from 'react'

const LoadingView : React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <CircularLoader/>
    </div>
  )
}

export default LoadingView