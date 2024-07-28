import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetStreamEventQuery, useGetTableEventsListQuery } from '@/redux/features/events/api';
import { useGetMyLiveEventQuery, useGetStreamKeyQuery } from '@/redux/features/profile/api';
import { useQuery, useRouter } from '@/router/hooks';
import { HLSPlayer } from '@/components/video';
import { HLS_URL } from '@/config/api.config';
import StreamControls from '@/components/studio/stream/StreamControls';
import LiveChatView from '@/views/studio/LiveChatView';
import useStreamState from '@/config/hooks/use-stream-state';

const StreamScreen: React.FC = () => {
  const router = useRouter();
  const location = useLocation();
  const eid = useQuery().get('eid');

  const { data: myLiveEventResponse } = useGetMyLiveEventQuery()

  useEffect(() => {
    myLiveEventResponse?.data[0].liveId &&
      router.replace(`/studio/stream?eid=${myLiveEventResponse?.data[0].liveId}`)
  }, [myLiveEventResponse])

  const { streamEvent, renderPublishControl, handlePublish, handleUnPublish, selectedEvent, setSelectedEvent } = useStreamState(eid, location, router);
  const { data: eventsResponse, error: eventsError, isLoading: eventsLoading } = useGetTableEventsListQuery();
  const { data: streamResponse } = useGetStreamEventQuery({ eventId: eid || '' });
  const { data: streamKeyResponse } = useGetStreamKeyQuery();

  const [hlsPlayer, setHlsPlayer] = useState<React.ReactNode | null>(null);
  const [hlsError, setHlsError] = useState<any>(null);
  const [hlsState, setHlsState] = useState<boolean>(false)

  function renderHlsBadge() {
    if (hlsState) {
      return (
        <p className='text-[red]'>LIVE</p>
      );
    } else {
      return (
        <p className='text-[#8b8b8b]'>OFFLINE</p>
      )
    }
  }

  useEffect(() => {
      setHlsPlayer(
        <div className='relative flex items-center bg-[black] aspect-[16/9]'>
          <div className='absolute top-0 left-0 m-4 z-10 text-sm font-bold'>
            {renderHlsBadge()}
          </div>
          <HLSPlayer
            url={`${HLS_URL}/${streamKeyResponse?.data[0].streamKey}/index.m3u8`}
            onError={error => setHlsError(error)}
            onStateChanged={state => setHlsState(state)}
          />
        </div>
      );
  }, [streamKeyResponse, streamResponse, hlsState]);


  //if (eventsLoading || streamDataLoading) return <LoadingView />;

  const renderEventsOptions = () => {
    if (eventsLoading) return <option>Loading events...</option>;
    if (eventsError) return <option>Error loading events</option>;
    if (eventsResponse?.data.length === 0) return <option>No events</option>;

    return (
      <>
        <option>Select an event</option>
        {eventsResponse?.data.map(event => (
          <option key={event._id} value={event._id}>{event.name}</option>
        ))}
      </>
    );
  };

  return (
    <div className='flex h-full border'>
      <div className='flex-1'>
        <div className='bg-[var(--paperColor)] p-4'>
          <StreamControls
            renderPublishControl={renderPublishControl}
            streamEvent={streamEvent}
            handlePublish={handlePublish}
            handleUnPublish={handleUnPublish}
            publishLoading={false}
            unpublishLoading={false}
            hlsError={hlsError !== null}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            renderEventsOptions={renderEventsOptions}
          />
        </div>
        {hlsPlayer}
      </div>
      <div className='w-[30%]'>
        <div className='bg-[var(--paperColor)] p-2 h-full'>
          <LiveChatView />
        </div>
      </div>
    </div>
  );
};

export default StreamScreen;
