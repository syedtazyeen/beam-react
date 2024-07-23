import { IconButton } from '@/components/common/button'
import React from 'react'

const Header: React.FC<{
    handleSiderbar: () => void
}> = ({ handleSiderbar }) => {
    return (
        <div className='w-full h-[3rem] px-2 flex items-center justify-between bg-[var(--paperColor)]'>
            <div className='flex items-center gap-2'>
                <IconButton
                    onClick={handleSiderbar}
                    iconPath='/icons/menu.svg' />
                <p className='font-bold text-lg'>Studio</p>
            </div>
            <div className='flex items-center gap-3'>
                <IconButton
                    onClick={() => null}
                    iconPath='/icons/bell.svg' />
                <button className='w-8 h-8 bg-[#8b8b8b50] rounded-full'>

                </button>
            </div>
        </div>
    )
}

export default Header