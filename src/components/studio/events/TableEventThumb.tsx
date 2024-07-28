import React from 'react'

const TableEventThumb: React.FC<{
    imgUrl?: string,
    name: string,
    desc?: string
}> = ({ name, desc }) => {
    return (
        <div className='flex gap-2'>
            <div className='bg-gray-500 w-40 rounded-lg aspect-[16/9] p-10'>

            </div>
            <div>
                <p className='text-sm font-medium'> {name}</p>
                <p className='text-sm font-medium opacity-50'>{desc}</p>
            </div>
        </div>
    )
}

export default TableEventThumb