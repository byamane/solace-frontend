import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = props.deleteJournal ? 'journal' : 'sleep'

  const handleDelete = () => {
    props.deleteJournal ? (
      props.deleteJournal && props.deleteJournal(id)
    ) : (
      props.deleteSleep && props.deleteSleep(id)
    )
    navigate(`/${resource}`)
  }

  return (
    <>
      <div className="page-header">
        <h2>Delete Confirmation</h2>
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <button 
          onClick={handleDelete} 
          type="button" 
          className="btn danger"
        >
          Yes - Delete!
        </button>
        <br />
        <Link className="btn submit" to={`/${resource}/${id}`}>
          <button>
            Cancel
          </button>
          </Link>
      </section>
    </>
  )
}

export default Confirmation