import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import plyr from 'plyr'
import { AiOutlineCalendar, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import {PlyrStyle} from "./style"
class PlyrComponent extends React.Component {
  constructor(props) {

    console.log(props)
    super(props)
    this.state = {
       path: [],
       title: ""
    }
  }
  
  
  
 /* componentDidMount() {
    this.player = new plyr('.js-plyr', this.props.options)
    this.player.source = this.props.sources
    //this.player.source = this.props.urlvideo
  
  }

  componentWillUnmount() {
    this.player.destroy()
  }*/

  render() {
    return (
      <PlyrStyle className=" pb-4">
        
        {/*<video
          playsInline
          controls
          data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
          className='js-plyr plyr'
        >
        </video>*/}
        <iframe width="820" height="500"
          src={this.props.urlvideo}>
          </iframe>
        <div className="video_content p-3">
          <Link
            href={{
              pathname: `/highlight/${this.props.matchid}`,
            }}
            as={this.props.matchid}
          >
            <a className="d-block" title={this.props.title}><h2 className="title">{this.props.title}</h2></a>
          </Link>
          <div className="video_content-editor d-flex align-items-center">
            <AiOutlineCalendar className="mr-2" /> {this.props.date}
            <AiOutlineEye className="mx-2" /> {this.props.view}
            <AiOutlineShareAlt className="mx-2" /> {this.props.shared}
          </div>
        </div>
      </PlyrStyle>
    )
  }
}

PlyrComponent.defaultProps = {
  options: {
    controls: [
      "play-large", // The large play button in the center
      // "restart", // Restart playback
      // "rewind", // Rewind by the seek time (default 10 seconds)
      "play", // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      "progress", // The progress bar and scrubber for playback and buffering
      "current-time", // The current time of playback
      "duration", // The full duration of the media
      "mute", // Toggle mute
      "volume", // Volume control
      "captions", // Toggle captions
      "settings", // Settings menu
      "pip", // Picture-in-picture (currently Safari only)
      // "airplay", // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      "fullscreen",
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  },
  sources: {
    type: 'video',
    sources: [
      {
        src: 'https://www.youtube.com/embed/JH5K5Vs7w2U',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: 'https://www.youtube.com/embed/JH5K5Vs7w2U',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  }
}

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  view: PropTypes.string,
  shared: PropTypes.string,
}

export default PlyrComponent