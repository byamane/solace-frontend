import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = props.deleteJournal ? 'journal' : 'sleep'

  const handleDelete = () => {
    props.deleteJournal && props.deleteJournal(id)
    // props.deleteSleep && props.deleteSleep(id)
    navigate(`/${resource}`)
  }

  return (
    <>
      <div className="page-header">
        <h1>Delete Confirmation</h1>
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/${resource}/${id}`}>Cancel</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Yes - Delete!</button>
      </section>
    </>
  )
}

export default Confirmation