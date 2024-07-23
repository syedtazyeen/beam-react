import React from 'react'

const CardItem: React.FC<{ children: React.ReactNode, label: string }> = ({ children, label }) => {
    return (
        <div className='flex w-full'>
            <div className='w-[30%]'>
                <p className='font-semibold'>{label}</p>
            </div>
            <div className='w-[70%]'> 
                {children}
            </div>
        </div>
    )
}

export default CardItem