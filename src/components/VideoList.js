import React from "react";
import VideoItem from "./VideoItem";

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideo = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  console.log(videos);
  return <div className="ui relaxed divided list">{renderedVideo}</div>;
};

export default VideoList;
