import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useGetStreamEventQuery, usePutPublishEventMutation, usePutUnPublishEventMutation } from '@/redux/features/events/api';
import { useGetMyLiveEventQuery } from '@/redux/features/profile/api';
import { LoadingView } from '@/views';

interface StreamContextProps {
  isLive: boolean;
  hlsConnected: boolean;
  startStream: (eventId: string) => void;
  endStream: () => void;
  setHlsConnected: (connected: boolean) => void;
  currentEventId: string | null;
  eventName: string | null;
}

const StreamContext = createContext<StreamContextProps | undefined>(undefined);

export const StreamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hlsConnected, setHlsConnected] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [currentEventId, setCurrentEventId] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);

  const { data: myLiveEventResponse, isLoading : myLiveEventLoading } = useGetMyLiveEventQuery();
  const { data: streamResponse, isLoading : streamResponseLoading } = useGetStreamEventQuery({ eventId: myLiveEventResponse?.data[0]?.liveId || '' });

  const [putPublishEvent] = usePutPublishEventMutation();
  const [putUnPublishEvent] = usePutUnPublishEventMutation();

  useEffect(() => {
    if (streamResponse?.data[0]) {
      setIsLive(streamResponse.data[0].status === 'live');
      setCurrentEventId(streamResponse.data[0]._id);
      setEventName(streamResponse.data[0].name);
    }
  }, [streamResponse]);

  const startStream = useCallback(async (eventId: string) => {
    await putPublishEvent({ eventId }).unwrap();
    setIsLive(true);
    setCurrentEventId(eventId);
  }, [putPublishEvent]);

  const endStream = useCallback(async () => {
    if (currentEventId) {
      await putUnPublishEvent({ eventId: currentEventId }).unwrap();
      setIsLive(false);
      setCurrentEventId(null);
    }
  }, [currentEventId, putUnPublishEvent]);

  const contextValue = useMemo(() => ({
    isLive,
    hlsConnected,
    startStream,
    endStream,
    setHlsConnected,
    currentEventId,
    eventName,
  }), [isLive, hlsConnected, startStream, endStream, currentEventId, eventName]);

  if(streamResponseLoading || myLiveEventLoading) return <LoadingView/>

  return (
    <StreamContext.Provider value={contextValue}>
      {children}
    </StreamContext.Provider>
  );
};

export const useStream = () => {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error('useStream must be used within a StreamProvider');
  }
  return context;
};
