import React, { useEffect, useState } from 'react';
import { Card } from '@/components/common/cards';
import Table from '@/components/common/table/Table';
import { TableEventThumb } from '@/components/studio/events';
import { Event } from '@/types';
import { useGetTableEventsListQuery } from '@/redux/features/events/api';
import { EventsShimmerTable } from '@/components/shimmer';
import { Button, IconButton } from '@/components/common/buttons';
import { useRouter } from '@/router/hooks';

const EventsScreen: React.FC = () => {
  const { data: eventResponse, isLoading, refetch } = useGetTableEventsListQuery();
  const [tableData, setTableData] = useState<any[]>([]);
  const { push } = useRouter()

  useEffect(() => {
    console.log('reload');

    if (eventResponse?.data) {
      setTableData(
        eventResponse.data.map((event: Event) => [
          <TableEventThumb key={event._id} name={event.name} desc={event.desc} />,
          <>
            {renderStatusControls(event.status)}
          </>,
          new Date(event.eventAt).toLocaleDateString(),
          <>
            <IconButton
              onClick={() => null}
              iconPath='/icons/control.svg' />
          </>
        ])
      );
    }
  }, [eventResponse]); 

  return (
    <div className='relative max-w-[1080px] m-auto p-4'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-xl font-semibold'>My Events</p>
        <div className='flex gap-4'>
          <IconButton
            onClick={() => refetch()}
            iconPath='/icons/reload.svg' />
          <Button
            onClick={() => push('/studio/create-event')}
            className='h-fit' variant='filled' size='medium'>
            <span className='flex gap-2 items-center'>
              <img className='w-5 invert-[100]' src='/icons/event.svg' />
              Create event
            </span>
          </Button>
        </div>
      </div>
      <div className='relative max-h-[80vh]'>
        <div className='sticky top-0'>
          <Card>
            {isLoading ? (
              <div className='w-full'>
                <EventsShimmerTable />
              </div>
            ) : (
              <div>
                <Table
                  columns={columns}
                  data={tableData}
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsScreen;



const columns = ['Events', 'Status', 'Date', 'Actions'];

function renderStatusControls(status: string) {
  switch (status) {
    case 'live':
      return (<div>
        <p className='bg-[var(--errorColor)] text-white text-xs rounded-full font-bold w-fit p-1 px-4'>{status}</p>
      </div>)
    case 'offline':
      return (<div>
        <p className='bg-[#8b8b8b] text-white text-xs rounded-full font-bold w-fit p-1 px-4'>{status}</p>
      </div>)

    case 'scheduled':
      return (<div>
        <p className='bg-[#8724d9] text-white text-xs rounded-full font-bold w-fit p-1 px-4'>{status}</p>
      </div>)

    default:
      return (<div>
        <p className='bg-[#8b8b8b] text-white text-xs rounded-full font-bold w-fit p-1 px-4'>{status}</p>
      </div>)
  }
}