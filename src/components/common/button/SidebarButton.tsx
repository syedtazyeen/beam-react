import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRouter } from '@/router/hooks'

const SidebarButton: React.FC<{
    label: string,
    path: string,
    iconPath?: string
}> = ({ label, path, iconPath }) => {
    const router = useRouter()
    const location = useLocation()
    const isActive = location.pathname.endsWith(path)

    const buttonClass = `
    flex
    items-center
    gap-2
    p-2
    font-semibold
    text-sm
    rounded-[10px] 
    ${isActive ? 'bg-[var(--primaryMainColor)] text-[white]' : 'hover:bg-[#8b8b8b50]'}
    
    `;

    const iconClass = `
        w-5
        ${isActive ? 'invert-[100]':'invert-[var(--invertValue)]'}
    `

    return (
        <button
            className={buttonClass}
            onClick={() => router.push(path)}>
            <img
                className={iconClass}
                src={iconPath} />
            {label}
        </button>
    )
}

export default SidebarButton