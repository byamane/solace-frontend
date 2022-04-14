import { useLocation } from "react-router-dom";
import './JournalDetails.css'

// Components
import JournalActions from "./components/JournalActions";

const JournalDetails = (props) => {
  
  const location = useLocation()
  const journal = location.state
  const journalDate = new Date(`${journal.date} EST`).toLocaleDateString()

  const emojiIndex = ["🥺", "😐", "🙂", "😄", "🤩"]
  
  return ( 
    <>
      <h1>Journal Details</h1>
      <div id="journal-details-btns">
        <JournalActions journal={journal} user={props.user} />
      </div>
      <div id="journal-details-container">
        <div id="journal-details-title">
          <h3>{journal.name}</h3>
        </div>
        <div>
          <h3>
            Date: {journalDate}
          </h3>
        </div>
        <div id="journal-details-rating">
          <h3>Mood: {emojiIndex[journal.mood]}</h3>
        </div>
        <div id="journal-details-journal">
          <p>{journal.journal}</p>
        </div>
      </div>
    </>
  );
}

export default JournalDetails;