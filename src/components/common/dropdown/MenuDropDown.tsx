import React from 'react'

const MenuDropDown: React.FC<{
    children?: React.ReactNode,
    open: boolean
}>
    = ({ children, open }) => {
        if (!open) return
        return (
            <div className='z-[999] bg-[var(--paperColor)] border border-[#8b8b8b20] w-[16rem] py-4 px-2 rounded-md shadow-lg absolute top-[calc(100%+.5rem)] right-[calc(100%-2rem)]'>
                {children}
            </div>
        )
    }

export default MenuDropDown