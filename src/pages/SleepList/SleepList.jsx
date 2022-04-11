import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepCard from "../../components/SleepCard/SleepCard"

const SleepList = (props) => {
  console.log(props)
  return (  
    <>
      <h1>Sleep List!</h1>
      {props.sleepLogs.length ? 
        <div>
          {props.sleepLogs.map((sleep) => 
            <SleepCard sleep={sleep}/>
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