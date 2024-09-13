import './VideoBackground.css';
import VideoBackground1 from "../../assets/background/videobackground.mp4"

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={VideoBackground1} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
