import React from 'react'

const IconButton: React.FC<{
    onClick: () => void,
    iconPath?: string
}> = ({ onClick, iconPath }) => {

    const buttonClass = `
    flex
    items-center
    gap-2
    p-2
    font-semibold
    text-sm
    rounded-[10px] 
    hover:bg-[#8b8b8b50]
    
    `;

    const iconClass = `
        w-5
        invert-[var(--invertValue)]
    `

    return (
        <button
            className={buttonClass}
            onClick={onClick}>
            <img
                className={iconClass}
                src={iconPath} />
        </button>
    )
}

export default IconButton