import React, { Component } from "react";
import VideoData from "../Data/Data.json";
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
            <div class="row">
              <div class="column">
                <img className="video-Thumbnail" src={record.videoThumbnail} />
              </div>

              <div class="column">
                <img
                  className="channel-Thumbnail"
                  src={record.channelThumbnail}
                />
              </div>
              <div className="channel-description">
                <h4> {record.videoName}</h4>
                <h3>{record.channelName}</h3>
                <p>{record.views} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default VideoList;
