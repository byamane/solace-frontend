import { Link } from 'react-router-dom'
import './JournalCard.css'

const JournalCard = ({journal}) => {
  return ( 
    <Link to={`/journal/${journal.id}`} className="card">
      <div className="journal-card">
        {/* <div className="card-img-container">
          <img className="usr-img" src={journal.mood} alt="Your mood" />
        </div> */}
        <h2 className="card-title">{journal.name}</h2>
      </div>
    </Link>
   );
}
 
export default JournalCard;