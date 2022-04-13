import NavBarBot from "../../components/NavBarBot/NavBarBot";
import { useLocation, Link } from "react-router-dom";
import { useState } from 'react';
import './SleepDetails.css'

const SleepDetails = (props) => {
  const location = useLocation()
  console.log(location.state)
  const [sleep, setSleep] = useState(location.state)
  const sleepDate = new Date(`${sleep.date} EST`).toLocaleDateString()
  // console.log(props)

  return (  
    <>
      <h1>Sleep Details</h1>
      <div id="sleep-details-btns">
        <Link 
          to={`/sleep/${sleep.id}/edit`}
          state={sleep}
        >
          <button>
            Edit
          </button>
        </Link>
        <Link
          to={`/sleep/${sleep.id}/confirmation`}
          state={sleep}
        >
          <button>
            Delete
          </button>
        </Link>
      </div>
      <div>
        <div id="sleep-details-title">
          <h3>Title: {sleep.name}</h3>
        </div>
        <div>
          <h3>Date: {sleepDate}</h3>
        </div>
        <div id="sleep-details-rating">
          <h3>Rating: {sleep.rating}</h3>
        </div>
        <div id="sleep-details-notes">
          <h3>Notes: </h3>
          <p>{sleep.notes}</p>
        </div>
      </div>
      <NavBarBot />
    </>
  );
}
 
export default SleepDetails;