import React, { useState, useMemo } from 'react';
import { Badge } from '@/components/common/badge';
import { Button } from '@/components/common/buttons';
import Select from '@/components/common/select/Select';
import { useGetTableEventsListQuery } from '@/redux/features/events/api';
import { useStream } from '@/config/providers/StreamProvider';
import { useRouter } from '@/router/hooks';
;

const StreamControlView: React.FC = () => {
    const { isLive, startStream, endStream, hlsConnected, eventName, currentEventId } = useStream();
    const { data: eventsResponse, isLoading: isEventsLoading } = useGetTableEventsListQuery();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const router = useRouter()

    const options = useMemo(() => {
        return eventsResponse?.data?.map(event => ({ label: event.name, value: event._id })) || [];
    }, [eventsResponse]);

    const handleStartStream = () => {
        if (selectedOption) {
            startStream(selectedOption);
        }
    };

    return (
        <div className='flex w-full'>
            <div className='flex gap-2 items-center flex-1 px-4'>
                <Badge type={isLive ? 'error' : 'info'} name={isLive ? 'Live' : 'Offline'} />
                <p className='font-medium'>{eventName}</p>
            </div>
            {isLive ? (
                <div className='flex w-[70%] gap-2 items-center'>
                    <span className='flex-1' />
                    <Button onClick={() => {
                        router.push('/live/' + currentEventId)
                    }} variant='outlined'  customColor='#8b8b8b'>
                        Preview stream
                    </Button>
                    <Button onClick={endStream} variant='outlined' type='error'>
                        End stream
                    </Button>
                </div>
            ) : (
                <div className='flex w-[70%] gap-2 items-center'>
                    <div className='flex-1'>
                        <Select
                            placeholder={isEventsLoading ? 'Loading events...' : 'Select an event'}
                            options={options}
                            onChange={e => setSelectedOption(e)}
                        //disabled={isEventsLoading}
                        />
                    </div>
                    <Button onClick={handleStartStream} disabled={!hlsConnected || !selectedOption} variant='filled' type='primary'>
                        <img className='invert-[100] w-6' src='/icons/play.svg' alt='Start' />
                        Start stream
                    </Button>
                </div>
            )}
        </div>
    );
};

export default StreamControlView;
