import { Button, ToggleButton } from '@/components/common/button'
import Card from '@/components/common/card/Card'
import CardItem from '@/components/common/card/CardItem'
import React from 'react'

const SettingsScreen: React.FC = () => {
  return (
    <div className='max-w-[1080px] m-auto p-4'>

      <p className='text-2xl font-semibold mt-4'>Settings & Preffrences</p>

      <Card>
        <CardItem label='Stream key'>
          <div className='flex gap-2'>
            <p className='flex items-center text-security-disc outline-none border-2 border-[#8b8b8b20] hover:border-[#8b8b8b50] px-2 py-1 rounded-[10px] flex-1 w-full'>
              streamKey
            </p>
            <Button variant='filled'>Copy</Button>
          </div>
        </CardItem>
        <div className='h-[1px] w-full bg-[#8b8b8b30] my-8' />
        <CardItem label='Low latency'>
          <div className='flex flex-col items-start gap-2'>
            <ToggleButton toggled onToggle={() => null} />
            <p className='text-sm'>Improve the viewing experience for your stream by enabling a backup in the event your stream is disconnected.</p>
          </div>
        </CardItem>
        <div className='h-[1px] w-full bg-[#8b8b8b30] my-8' />
        <CardItem label='Copyrighted Warnings'>
          <div className='flex flex-col items-start gap-2'>
            <ToggleButton toggled onToggle={() => null} />
            <p className='text-sm'>When turned on, you'll be notified if multiple instances of copyrighted detected in your Stream in a 24-hour time period, and your ability to publish Event by default on your channel will be proactively disabled. Learn more in this Help Article.</p>
          </div>
        </CardItem>
      </Card>
    </div>
  )
}

export default SettingsScreen