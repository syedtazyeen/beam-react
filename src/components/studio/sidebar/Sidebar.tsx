import { SidebarButton } from '@/components/common/button'
import studioLinks from '@/router/links/studio.links'
import React from 'react'

const Sidebar: React.FC = () => {
    return (
        <div
            style={{ userSelect: 'none' }}
            className='flex flex-col gap-1'>
            {studioLinks.map(link => (
                <SidebarButton
                    key={link.label}
                    path={link.path}
                    iconPath={link.iconPath}
                    label={link.label} />
            ))}
        </div>
    )
}

export default Sidebar