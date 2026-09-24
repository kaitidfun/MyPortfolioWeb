import { useRef } from "react";

export default function SilentLoopVideo({ src, poster, className = "" }) {
  const videoRef = useRef(null);

  function handleEnded() {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        onEnded={handleEnded}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" />
    </div>
  );
}
