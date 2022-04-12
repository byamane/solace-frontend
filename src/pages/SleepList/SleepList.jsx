import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepCard from "../../components/SleepCard/SleepCard"
import { Link } from 'react-router-dom'

const SleepList = (props) => {
  console.log(props)
  return (  
    <>
      <h1>Sleep List!</h1>
      <Link to='/sleep/new'>
        <button>
          Add Sleep
        </button>
      </Link>
      {props.sleepLogs.length ? 
        <div>
          {props.sleepLogs.map((sleep, idx) => 
            <SleepCard key={idx} sleep={sleep}/>
          )}
        </div>
      :
        <></>
      }
      <NavBarBot />
    </>
  );
}
 
export default SleepList;