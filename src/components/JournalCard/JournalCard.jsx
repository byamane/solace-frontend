import { Link } from 'react-router-dom'
import './JournalCard.css'

const JournalCard = ({journal}) => {

  const journalDate = new Date(journal.created_at).toDateString()

  return ( 
    <Link 
      to={`/journal/${journal.id}`} 
      className="journal-card-container"
      state={journal}
      style={{textDecoration: 'none'}}  
    >
      <div id="journal-card">
        <h2 id="journal-card-title">{journal.name}</h2>
        <p>{journalDate}</p>
      </div>
    </Link>
   );
}
 
export default JournalCard;