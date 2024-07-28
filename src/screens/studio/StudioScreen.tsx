import { Button } from '@/components/common/buttons'
import Card from '@/components/common/cards/Card'
import { useRouter } from '@/router/hooks'
import React from 'react'

const StudioScreen: React.FC = () => {
    const router = useRouter()
    return (
        <div className='max-w-[1080px] m-auto p-4'>
            <Card>
                <div className='flex justify-between items-center'>
                    <div className='flex-1 flex items-center'>
                        <img
                            className='max-w-[250px]'
                            src='https://cdn3d.iconscout.com/3d/premium/thumb/male-influencer-doing-live-stream-8652023-6894658.png' />
                        <p className='text-xl font-bold'>Experience Live Magic. <br />Stream Your Event with Ticketed Audience Access</p>
                    </div>

                    <Button 
                    onClick={()=>router.push('/studio/create-event')}
                    className='h-fit' variant='filled' size='large'>
                        <span className='flex gap-2 items-center'>
                            <img className='w-5 invert-[100]' src='/icons/event.svg' />
                            Create new event
                        </span>
                    </Button>

                </div>
            </Card>
        </div>
    )
}

export default StudioScreen