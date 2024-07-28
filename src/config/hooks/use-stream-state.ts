import { useEffect, useState } from 'react';
import { usePutPublishEventMutation, usePutUnPublishEventMutation, useGetStreamEventQuery } from '@/redux/features/events/api';

const useStreamState = (eid: string | null, location: any, router: any) => {
  const [renderPublishControl, setRenderPublishControl] = useState<boolean>(true);
  const { data: streamEventData } = useGetStreamEventQuery({ eventId: eid || '' });
  const streamEvent = streamEventData?.data[0];

  useEffect(() => {
    if (streamEvent) {
      setRenderPublishControl(streamEvent.status === 'offline');
    } else {
      setRenderPublishControl(true);
    }
  }, [streamEvent]);

  const [putPublishEvent] = usePutPublishEventMutation();
  const [putUnPublishEvent] = usePutUnPublishEventMutation();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const handlePublish = async () => {
    if (selectedEvent) {
      await putPublishEvent({ eventId: selectedEvent }).unwrap();
      setRenderPublishControl(false);
      router.replace(`${location.pathname}?eid=${selectedEvent}`);
    }
  };

  const handleUnPublish = async () => {
    if (eid) {
      await putUnPublishEvent({ eventId: eid }).unwrap();
      setRenderPublishControl(true);
      router.replace(location.pathname);
    }
  };

  return {
    streamEvent,
    renderPublishControl,
    setRenderPublishControl,
    handlePublish,
    handleUnPublish,
    selectedEvent,
    setSelectedEvent,
  };
};

export default useStreamState;
