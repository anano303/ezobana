import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoType = "youtube", videoId = "igBjxL5iwUc" }) => {
  // Determine the video source based on type and ID
  const getVideoSrc = () => {
    if (videoType === "youtube") {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&showinfo=0`;
    } else if (videoType === "facebook") {
      return `https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F${videoId}%2F&show_text=false&width=560&t=0`;
    }
    return "";
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <iframe
          src={getVideoSrc()}
          title="Video"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
