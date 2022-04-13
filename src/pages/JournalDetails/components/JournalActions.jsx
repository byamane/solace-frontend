import { useNavigate } from "react-router-dom";

const JournalActions = ({journal, user}) => {
  const navigate = useNavigate()
  
  return ( 
    journal.profile_id === user.id &&
      <div className="actions">
        <button className="btn warn" onClick={() => navigate(`/journal/${journal.id}/edit`, { state: journal })}>Edit</button>
        <button className="btn danger" onClick={() => navigate(`/journal/${journal.id}/confirmation`, { state: journal })}>Delete</button>
      </div>
   );
}
 
export default JournalActions;