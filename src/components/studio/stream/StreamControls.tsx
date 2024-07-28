import React from 'react';
import { CardItem } from '@/components/common/cards';
import EventDropdown from './EventDropdown';
import { Button } from '@/components/common/buttons';
import { Event } from '@/types';

interface StreamControlsProps {
  streamEvent: Event | undefined;
  renderPublishControl : boolean;
  handlePublish: () => void;
  handleUnPublish: () => void;
  publishLoading: boolean;
  unpublishLoading: boolean;
  hlsError: boolean;
  selectedEvent: string | null;
  setSelectedEvent: (eventId: string) => void;
  renderEventsOptions: () => JSX.Element;
}

const StreamControls: React.FC<StreamControlsProps> = ({
  streamEvent,
  renderPublishControl,
  handlePublish,
  handleUnPublish,
  publishLoading,
  unpublishLoading,
  hlsError,
  selectedEvent,
  setSelectedEvent,
  renderEventsOptions,
}) => (
  <>
    {!renderPublishControl && !hlsError ? (
      <div className='flex'>
        <p className='flex-1 font-semibold text-sm'>Streaming : {streamEvent?.name}</p>
        <Button
          onClick={handleUnPublish}
          loading={unpublishLoading}
          loadingPlaceHolder='Ending event..'
          variant='filled'
          width='full'
          className='bg-[red] max-w-[200px]'
        >
          End event
        </Button>
      </div>
    ) : (

      <CardItem label='Select an event'>
        <div className='flex justify-between gap-2'>
          <EventDropdown selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} renderEventsOptions={renderEventsOptions} />
          <Button
            onClick={handlePublish}
            loading={publishLoading}
            disabled={hlsError}
            loadingPlaceHolder='Publishing..'
            variant='filled'
            width='full'
            className='max-w-[200px]'
          >
            Publish
          </Button>
        </div>
      </CardItem>
    )}
  </>
);

export default StreamControls;
