import React, { Component } from "react";
import VideoData from "../VideosData/VideosListData.json";
import "./StylingSheets/VideosList.css";
class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="videos">
        {VideoData.map((record, i) => (
          <div key={i}>
            <img className="video-img" src={record.videoThumbnail} />
            <img src={record.channelThumbnail} />
            {record.id} - {record.channelName}
            {record.views}
            {record.videoName}
          </div>
        ))}
      </div>
    );
  }
}


export default VideoList;
