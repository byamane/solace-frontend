import './SleepCard.css'
import { Link } from 'react-router-dom'

const SleepCard = (props) => {
  const sleepDate = new Date(`${props.sleep.date} EST`).toLocaleDateString()
  const imgIdx = Math.floor(Math.random() * (props.sleepImgs.length)) 
  const sleepName = props.sleep.name.length > 12 ? `${props.sleep.name.substring(0,12)}...` : props.sleep.name

  return (  
    <>
      <Link 
        to={`/sleep/${props.sleep.id}`} 
        style={{textDecoration: 'none'}}
        state={props.sleep}
      >
        <div 
          id="sleep-card" 
          style={{
            backgroundImage: `url(${props.sleepImgs[imgIdx]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div id="sleep-card-title">
            <h5>{sleepName}</h5>
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