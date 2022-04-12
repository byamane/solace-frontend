import { Link } from 'react-router-dom'
import './JournalCard.css'

const JournalCard = ({journal}) => {

  const journalDate = new Date(journal.created_at).toDateString()

  return ( 
    <Link 
      to={`/journal/${journal.id}`} 
      className="card"
      state={journal}
      style={{textDecoration: 'none'}}  
    >
      <div className="journal-card">
        {/* <div className="card-img-container">
          <img className="usr-img" src={journal.mood} alt="Your mood" />
        </div> */}
        <h2 className="card-title">{journal.name}</h2>
        <p>{journalDate}</p>
      </div>
    </Link>
   );
}
 
export default JournalCard;