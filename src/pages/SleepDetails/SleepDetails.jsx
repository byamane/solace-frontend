import NavBarBot from "../../components/NavBarBot/NavBarBot";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import userEvent from "@testing-library/user-event";


const SleepDetails = (props) => {
  const location = useLocation()
  console.log(location.state)
  const [sleep, setSleep] = useState(location.state)
  const sleepDate = new Date(sleep.created_at).toDateString()
  console.log(props)

  return (  
    <>
      <h1>Sleep Details</h1>
      {props.user.id === sleep.profile_id ?
        <div id="sleep-details-btns">
          <button>
            Edit
          </button>
          <button>
            Delete
          </button>
        </div>
      :
        <></>
      }
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