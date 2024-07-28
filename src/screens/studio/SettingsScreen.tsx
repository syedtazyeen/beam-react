import { Button, ToggleButton } from "@/components/common/buttons";
import Card from "@/components/common/cards/Card";
import CardItem from "@/components/common/cards/CardItem";
import { useGetStreamKeyQuery } from "@/redux/features/profile/api";
import React, { useState } from "react";

const SettingsScreen: React.FC = () => {
  const { data: streamKeyData } = useGetStreamKeyQuery();

  const handleCopy = () => {
    if (streamKeyData?.data[0].streamKey) {
      navigator.clipboard
        .writeText(streamKeyData.data[0].streamKey)
        .then(() => {
          alert("Stream key copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const [showStreamKey, setShowStreamKey] = useState(false)
  const handleShowStreamKey = () => {
    setShowStreamKey(true);
    setTimeout(() => {
      setShowStreamKey(false)
    }, 3000);
  }

  return (
    <div className="max-w-[1080px] m-auto p-4">
      <p className="text-xl font-semibold">Settings & Prefrences</p>

      <Card>
        <CardItem label="Stream key">
          <div className="">
            <div className="w-full flex gap-2">
              <p className={`flex items-center ${!showStreamKey && 'text-security-disc'} outline-none border-2 border-[#8b8b8b20] hover:border-[#8b8b8b50] px-2 py-1 rounded-[10px] flex-1 w-full`}>
                {streamKeyData?.data[0].streamKey}
              </p>
              <Button onClick={handleCopy} variant="filled">Copy</Button>
            </div>
            <button onClick={handleShowStreamKey} className="mt-2 font-bold text-sm text-[var(--primaryMainColor)]">Show</button>
          </div>
        </CardItem>
        <div className="h-[1px] w-full bg-[#8b8b8b30] my-8" />
        <CardItem label="Low latency">
          <div className="flex flex-col items-start gap-2">
            <ToggleButton toggled onToggle={() => null} />
            <p className="text-sm">
              Improve the viewing experience for your stream by enabling a
              backup in the event your stream is disconnected.
            </p>
          </div>
        </CardItem>
        <div className="h-[1px] w-full bg-[#8b8b8b30] my-8" />
        <CardItem label="Copyrighted Warnings">
          <div className="flex flex-col items-start gap-2">
            <ToggleButton toggled onToggle={() => null} />
            <p className="text-sm">
              When turned on, you'll be notified if multiple instances of
              copyrighted detected in your Stream in a 24-hour time period, and
              your ability to publish Event by default on your channel will be
              proactively disabled. Learn more in this Help Article.
            </p>
          </div>
        </CardItem>
      </Card>
    </div>
  );
};

export default SettingsScreen;
