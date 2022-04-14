import './SleepInput.css'

const SleepInput = (props) => {
  const form = props.form
  return (  
    <>
      <div id="add-sleep-title-container">
        <label htmlFor="add-sleep-title">Title: </label>
        <input 
          name="name" 
          id="add-sleep-title" 
          placeholder="Slept Great!" 
          onChange={props.handleChange}
          required
          value={form.name ? form.name : ''}
        />
      </div>
      {/* <br /> */}
      <div id='add-sleep-date-container'>
        <label htmlFor="">Date: </label>
        <input 
          type="date"
          name="date"
          id="add-sleep-date"
          onChange={props.handleChange}
          pattern="\d{2}-\d{2}-\d{4}"
          value={form.date ? 
            new Date(form.date).toISOString().substring(0,10) 
            : 
            new Date().toISOString().substring(0,10)
          }
        />
        {/* {console.log(new Date().toISOString().substring(0,10))} */}
      </div>
      {/* <br /> */}
      <div id="add-sleep-rating-container">
        <label htmlFor="add-sleep-rating">Rating: </label>
        <select 
          name="rating" 
          id="add-sleep-rating" 
          onChange={props.handleChange}
          value={form.rating ? form.rating : 1}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      {/* <br /> */}
      <div id="add-sleep-notes-container">
        <label htmlFor="add-sleep-notes">Notes: </label>
        <br />
        <textarea 
          name="notes" 
          id="add-sleep-notes" 
          cols="30" rows="14" 
          placeholder="Ex: I slept wonderfully. I slept for 12hrs. etc..." 
          onChange={props.handleChange}
          required
          value={form.notes ? form.notes : ''}
        >
        </textarea>
      </div>
    </>
  );
}
 
export default SleepInput;