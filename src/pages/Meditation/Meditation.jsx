// import NavBarBot from "../../components/NavBarBot/NavBarBot";
import Timer from "./components/Timer";
import AudioPlayer from "./components/AudioPlayer";
import "./Meditation.css"

const Meditation = (props) => {
  const tracks = [
    {
      title: "Nature",
      artist: "dude",
      audioSrc: "rando.mp3",
      image: "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg",
      color: "string",
    },
  ];
 

  return (
    <>
      <h1>Meditate</h1>
      <Timer />
      <AudioPlayer tracks={tracks} />
      {/* <NavBarBot /> */}
    </>
   );
}
 
export default Meditation;