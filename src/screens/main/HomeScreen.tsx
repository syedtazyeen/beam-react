import { EventThumb } from "@/components/main/thumbs";
import { useGetLiveEventsQuery, useGetOfflineEventsQuery } from "@/redux/features/events/api";
import React from "react";

const HomeScreen: React.FC = () => {
    const { data: liveEvents } = useGetLiveEventsQuery();
    const { data: offlineEvents } = useGetOfflineEventsQuery();
    return (
        <div className="max-w-[1080px] m-auto pt-10 px-4">
            <img className="fixed w-[100vw] z-[-1] opacity-10" src="./bg/login.svg" />
            <h2 className="text-3xl font-bold">
                Discover live events and join your interests <br /> in real-time for a
                shared, dynamic experience.
            </h2>
            <div className="bg-[var(--paperColor)] w-full p-4 my-16">
                <div className="w-full mt-8">
                    <p className="font-bold text-lg py-4">
                        <span className="text-[var(--primaryMainColor)]">Live Events</span>{" "}
                        now
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
                                <p className="py-8 w-full text-center opacity-50">No live streams</p>
                            </>
                        )}
                    </>
                </div>
            </div>
            <div className="bg-[var(--paperColor)] w-full p-4 my-16">
                <div className="w-full mt-8">
                    <p className="font-bold text-lg py-4">
                        <span className="text-[var(--primaryMainColor)]">Events</span>{" "}
                        you may like
                    </p>
                    <>
                        {offlineEvents && offlineEvents.data.totalCount !== 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {offlineEvents.data.list?.map((event) => (
                                    <EventThumb key={event._id} event={event} />
                                ))}
                            </div>
                        ) : (
                            <>
                                <p className="py-8 w-full text-center opacity-50">No live streams</p>
                            </>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
