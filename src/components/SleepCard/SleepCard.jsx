import './SleepCard.css'
import { Link } from 'react-router-dom'

const SleepCard = (props) => {
  console.log(props)
  // console.log(props.sleep.created_at)
  const sleepDate = new Date(props.sleep.created_at).toDateString()
  // const sleepDate2 = sleepDate.toDateString()
  // console.log('sleepdate', sleepDate)

  return (  
    <>
      {/* <h3>This is sleep card</h3> */}
      <Link 
        to={`/sleep/${props.sleep.id}`} 
        style={{textDecoration: 'none'}}
        state={props.sleep}
      >
        <div id="sleep-card">
          <div id="sleep-card-title">
            <h5>{props.sleep.name}</h5>
          </div>
          <div id="sleep-card-date-rating">
            <p>
              <span>{sleepDate}</span>
              <span>Rating: {props.sleep.rating}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
 
export default SleepCard;