import { useNavigate } from "react-router-dom";

const JournalActions = ({journal, user}) => {
  const navigate = useNavigate()
  
  return ( 
    journal.profile_id === user.id &&
      <div>
        <button className="journal-btn-actions" id="journal-edit-btn" onClick={() => navigate(`/journal/${journal.id}/edit`, { state: journal })}>Edit</button>
        <button className="journal-btn-actions" id="journal-delete-btn" onClick={() => navigate(`/journal/${journal.id}/confirmation`, { state: journal })}>Delete</button>
      </div>
   );
}
 
export default JournalActions;