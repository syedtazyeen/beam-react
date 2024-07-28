import React from 'react';
import LiveChatView from '@/views/studio/LiveChatView';
import StreamView from '@/views/studio/StreamView';
import { StreamProvider, useStream } from '@/config/providers/StreamProvider';
import StreamControlView from '@/views/studio/StreamControlView';


const StreamScreen: React.FC = () => {
  const { setHlsConnected } = useStream();

  const handleHlsStarted = (state: boolean) => {
    setHlsConnected(state);
  };

  return (
    <div className='flex h-full'>
      <div className='flex-1'>
        <div className='flex items-center bg-[var(--paperColor)] h-[70px]'>
          <StreamControlView />
        </div>
        <StreamView setStarted={handleHlsStarted} />
      </div>
      <div className='w-[30%]'>
        <div className='bg-[var(--paperColor)] h-full'>
          <LiveChatView />
        </div>
      </div>
    </div>
  );
};

const StreamScreenWithProvider: React.FC = () => (
  <StreamProvider>
    <StreamScreen />
  </StreamProvider>
);

export default StreamScreenWithProvider;