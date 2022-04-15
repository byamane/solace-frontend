import { useLocation, Link } from "react-router-dom";
import './SleepDetails.css'
import Header from "../../components/Header/Header";

const SleepDetails = (props) => {
  const location = useLocation()
  const sleep = location.state
  const sleepDate = new Date(`${sleep.date} EST`).toLocaleDateString()

  return (  
    <>
      <Header />
      <h1 id="sleep-logs-title">Sleep Details</h1>
      <div id="sleep-details-btns">
        <Link 
          to={`/sleep/${sleep.id}/edit`}
          state={sleep}
        >
          <button id="sleep-edit-btn">
            Edit
          </button>
        </Link>
        <Link
          to={`/sleep/${sleep.id}/confirmation`}
          state={sleep}
        >
          <button id="sleep-delete-btn">
            Delete
          </button>
        </Link>
      </div>
      <div id="sleep-details-div">
        <div id="sleep-details-container">
          <div id="sleep-details-title">
            <h3>{sleep.name}</h3>
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
      </div>
    </>
  );
}

export default SleepDetails;