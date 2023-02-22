import video from "../assets/video.mp4";

export default function Main() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To beauty.</p>
      </div>
    </div>
  );
}
