import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
  url: string;
  onError: (error: string) => void;
  onStateChanged: (state: boolean) => void;
}

const HLSPlayer: React.FC<HLSPlayerProps> = ({ url, onError, onStateChanged }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isError, setError] = useState(false);
  //const [isStreamConnected, setStreamConnected] = useState(false);

  useEffect(() => {
    let hls: Hls | null = null;
    const videoElement = videoRef.current;

    if (Hls.isSupported()) {
      hls = new Hls();
      if (videoElement) {
        hls.loadSource(url);
        hls.attachMedia(videoElement);
        
        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            onError("Stream not connected");
            onStateChanged(false)
            setError(true);
          }
        });

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          //setStreamConnected(true);
          onStateChanged(true)
          console.log('connected');
          
        });
      }
    } else {
      onError("Browser not supported");
      onStateChanged(false)
      setError(true);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [url, onError, onStateChanged]);

  if (isError) return <></>;

  return (
    <video
      ref={videoRef}
      controls // Enables native browser controls
      className='w-full bg-[black]'
    />
  );
};

export default HLSPlayer;
