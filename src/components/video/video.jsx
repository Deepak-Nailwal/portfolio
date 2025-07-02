import React from "react";
import vid1 from '../../assets/vid/video1.mp4';

const Video = () => {
  return (
    <div className="mt-4 ">
      <video src={vid1} autoPlay muted loop playsInline className="w-100" />
    </div>
  );
};
export default Video;
