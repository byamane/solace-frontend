import NavBarBot from "../../components/NavBarBot/NavBarBot";
import JournalInput from "../../components/JournalInput/JournalInput";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const JournalForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateJournal(form) : props.addJournal(form)
    navigate(`/journal`)
  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  
  return (
    <>
      {id ?
        <h1>Edit Journal</h1>
      :
        <h1>Add Journal</h1>
      }
      <form onSubmit={handleSubmit}>
        <JournalInput 
          form={form}
          handleChange={handleChange}
        />
        <div id="add-journal-btn-container">
          <button
            type="submit"
            id="add-journal-btn"
          >
            Submit
          </button>
        </div>
      </form>
      <NavBarBot />
    </>
   );
}
 
export default JournalForm;