import React from 'react'

const LiveChatView: React.FC = () => {
    return (
        <div className='flex flex-col h-full'>
            <p className='font-semibold border-b border-[#8b8b8b30] h-[70px] flex items-center p-5'>Live chat</p>
            <div className='flex-1 opacity-50 flex items-center justify-center'>
                <p>Unavailable</p>
            </div>
        </div>
    )
}

export default LiveChatView