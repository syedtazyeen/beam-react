import React from 'react'

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='bg-[var(--paperColor)] w-full my-8 p-4 rounded-md border border-[#8b8b8b20]'>
            {children}
        </div>
    )
}

export default Card