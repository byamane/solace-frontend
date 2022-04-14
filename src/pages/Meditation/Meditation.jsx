import Timer from "./components/Timer"
import AudioPlayer from "./components/AudioPlayer"
import Header from "../../components/Header/Header"
import tracks from "./components/Tracks"
import "./Meditation.css"

const Meditation = (props) => { 

  return (
    <>
      <Header />
      <h1>Meditate</h1>
      <Timer />
      <AudioPlayer tracks={tracks} />
    </>
   );
}
 
export default Meditation