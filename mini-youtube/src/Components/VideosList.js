import React from "react";
import VideoItem from "./VideoItem";

export default function VideosList({ videos, onVideoSelect }) {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return (
    <div className="ui justified container">
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
}
