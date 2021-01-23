// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component{
  constructor(){
    super();

    this.state = {
          errors: [],
          user: null,
          settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
          }
    }
  }

  changer1 = () =>{
    this.setState(
      {
        settings: {
          ...this.state.settings, bitrate: 12
        }
      });
  };

  changer2 = () =>{
    this.setState(
      {
        settings: {
          ...this.state.settings, video: {
            ...this.state.settings.video, resolution: "720p"
          }
        }
      });
  };

  render(){
    return (
      <button onClick={this.changer1} > bitrate Changed</button>
      <button onClick={this.changer2} > video resolution Changed</button>
    )
  }
}
