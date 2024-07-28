import { IconButton, ToggleButton } from '@/components/common/buttons'
import MenuDropDown from '@/components/common/dropdown/MenuDropDown'
import { resetCredentials } from '@/redux/features/auth/authSlice'
import { useGetMyProfileQuery } from '@/redux/features/profile/api'
import { AppDispatch } from '@/redux/store'
import { useRouter } from '@/router/hooks'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Header: React.FC<{
    handleSidebar: () => void
}> = ({ handleSidebar }) => {

    const { data: profileResponse } = useGetMyProfileQuery()

    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const dispatch: AppDispatch = useDispatch()
    const { reload, push } = useRouter()

    useEffect(() => {
        console.log(profileResponse);
    }, [profileResponse])

    const renderProfileButton = () => {
        return (
            <MenuDropDown open={profileMenuOpen}>
                <div className='flex items-center gap-2 p-1 pb-4 mb-2 border-b border-[#8b8b8b20]'>
                    <div className='w-10 h-10 bg-[#8b8b8b50] rounded-full'>
                    </div>
                    <div className='text-start'>
                        <p className='font-medium text-sm'>{profileResponse?.data[0].username}</p>
                        <p className='font-medium text-xs opacity-50'>{profileResponse?.data[0].email}</p>
                    </div>
                </div>

                <div className='w-full'>
                    <IconButton
                        width='full'
                        label='Back to Beams'
                        iconPath='/icons/home.svg'
                        onClick={() => {
                            push('/')
                        }} />
                    <IconButton
                        width='full'
                        label='Logout'
                        iconPath='/icons/logout.svg'
                        onClick={() => {
                            dispatch(resetCredentials())
                            reload()
                        }} />
                    <IconButton
                        width='full'
                        label='Dark theme'
                        iconPath='/icons/moon.svg'
                        onClick={() => {
                        }} >
                        <div className='flex-1 flex justify-end scale-[.8]'>
                        <ToggleButton toggled={false} onToggle={function (): void {
                            throw new Error('Function not implemented.')
                        }} />
                        </div>
                    </IconButton>
                </div>

            </MenuDropDown>
        )
    }

    return (
        <div className='w-full h-[3rem] px-[.55rem] flex items-center justify-between bg-[var(--paperColor)] shadow-sm'>
            <div className='flex items-center gap-2'>
                <IconButton
                    onClick={handleSidebar}
                    iconPath='/icons/menu.svg' />
                <div className='flex items-center gap-2'>
                    <img className='w-6' src='/logo.svg' />
                    <p className='font-bold text-lg'>Studio</p>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <IconButton
                    onClick={() => null}
                    iconPath='/icons/bell.svg' />
                <button className='relative rounded-[var(--borderRadiusPrimary)]'>
                    <IconButton
                        onClick={() => setProfileMenuOpen(state => !state)}
                        iconPath='/icons/user.svg' />
                    {renderProfileButton()}
                </button>
            </div>
        </div>
    )
}

export default Header