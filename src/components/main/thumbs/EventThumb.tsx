import React, { useState } from "react";
import { Event } from "@/types";
import { Badge } from "@/components/common/badge";
import { useRouter } from "@/router/hooks";
import { useGetCreatorProfileQuery } from "@/redux/features/profile/api";

const EventThumb: React.FC<{ event: Event }> = ({ event }) => {
  const { data: creatorProfileResponse } = useGetCreatorProfileQuery({
    userId: event.creatorId,
  });

  return (
    <div className="max-w-xs rounded overflow-hidden m-2">
      <div className="hover:bg-[var(--primaryMainColor)]">
        <EventImage event={event} />
      </div>
      <div className="py-2">
        <div className="font-bold text-sm">{event.name}</div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full bg-[#8b8b8b30]">

        </div>
        <p className="text-sm font-semibold cursor-pointer hover:text-[var(--primaryMainColor)]">
          {creatorProfileResponse?.data[0].username}
        </p>
      </div>
    </div>
  );
};

export default EventThumb;

///
function getBadgeType(status: string) {
  switch (status) {
    case "live":
      return "error";
    case "scheduled":
      return "violet";
    default:
      return "info";
  }
}

//
const EventImage: React.FC<{ event: Event }> = ({ event }) => {
  const [imgSrc, setImgSrc] = useState(event._id);
  const router = useRouter();

  const handleError = () => {
    setImgSrc(
      "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
    );
  };

  return (
    <div
      className="
      relative
      hover:translate-x-[.4rem]
      hover:translate-y-[-.4rem] 
      cursor-pointer
      transition duration-0 hover:duration-150"
      onClick={() => router.push("/live/" + event._id)}
    >
      <div className="absolute top-0 left-0 m-3">
        <Badge name={event.status} type={getBadgeType(event.status)} />
      </div>
      <img
        className="w-full aspect-[16/9] object-cover"
        src={imgSrc}
        alt={""}
        onError={handleError}
      />
    </div>
  );
};
