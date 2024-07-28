import { EventThumb } from "@/components/main/thumbs";
import { HLSPlayer } from "@/components/video";
import { HLS_URL } from "@/config/api.config";
import { useGetEventQuery, useGetLiveEventsQuery } from "@/redux/features/events/api";
import { LoadingView } from "@/views";
import LiveChatView from "@/views/studio/LiveChatView";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StreamScreen: React.FC = () => {
    const { id } = useParams()
    const { data: liveEvents } = useGetLiveEventsQuery();;
    const { data: currentEvent, isError, isLoading  } = useGetEventQuery({ eventId: id || "" });
    const [hlsError, setHlsError] = useState(false);

    if(isLoading) return <LoadingView/>

    if (hlsError || isError)
        return (
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="flex flex-col min-h-[80vh] w-full justify-center items-center gap-1 p-4  m-4 bg-[var(--paperColor)] opacity-60 border border-[#8b8b8b20] rounded-[var(--borderRadiusPrimary)]">
                    <img
                        className="invert-[var(--invertValue)] w-7 "
                        src="/icons/error.svg"
                    />
                    <p className="font-medium text-xl">Event not streaming</p>
                </div>

                <div className="bg-[var(--paperColor)] w-full p-4 my-16">
                    <div className="w-full mt-8">
                        <p className="font-bold text-lg py-4">
                            Other
                            {" "}
                            <span className="text-[var(--primaryMainColor)]">
                                Events
                            </span>{" "}
                            you may live
                        </p>
                        <>
                            {liveEvents && liveEvents.data.totalCount !== 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {liveEvents.data.list?.map((event) => (
                                        <EventThumb key={event._id} event={event} />
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <p className="py-8 w-full text-center opacity-50">
                                        Cannot find events!
                                    </p>
                                </>
                            )}
                        </>
                    </div>
                </div>
            </div>
        );


    return (
        <div className="flex h-full px-4">
            <div className="flex-1 bg-black">
                <div className="bg-black aspect-[16/9] flex items-center">
                    <HLSPlayer
                        url={HLS_URL + `/${currentEvent?.data[0].streamKey}/index.m3u8`}
                        onError={(error) =>
                            error ? setHlsError(true) : setHlsError(false)
                        }
                        onStateChanged={() => null}
                    />
                </div>
                <div className="flex items-center bg-[var(--paperColor)] h-[70px]"></div>
            </div>
            <div className="w-[30%]">
                <div className="bg-[var(--paperColor)] h-full">
                    <LiveChatView />
                </div>
            </div>
        </div>
    );
};

export default StreamScreen;
