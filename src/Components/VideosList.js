import React, { Component } from "react";
import VideoData from "../VideosData/VideosListData.json";
class VideoList extends Component{
    render(){
        return(
            <div>
            <h1> hello there this is video list heading 
            </h1>
            {VideoData.map((videoDetail, index)=>{
                return <h1>{videoDetail.channelName}
                
                </h1>
            })}
            </div>
        )
    }
}


export default VideoList;
