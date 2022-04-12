import NavBarBot from "../../components/NavBarBot/NavBarBot";
import SleepInput from "../../components/SleepInput/SleepInput";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getOne } from "../../services/sleepService";

const SleepForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateSleep(form) : props.addSleep(form)
    navigate(`/sleep`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.sleep.id,
        name: data.sleep.name,
        rating: data.sleep.rating,
        notes: data.sleep.notes,
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (  
    <>
      <h1>Add Sleep</h1>
      <form onSubmit={handleSubmit}>
        <SleepInput 
          form={form}
          handleChange={handleChange}
        />
        <div id="add-sleep-btn-container">
          <button
            type="submit"
            id="add-sleep-btn"
          >
            Add
          </button>
        </div>
      </form>
      <NavBarBot />
    </>
  );
}
 
export default SleepForm;