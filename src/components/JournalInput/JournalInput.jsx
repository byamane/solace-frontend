import "./JournalInput.css"

const JournalInput = (props) => {
  const form = props.form
  return ( 
    <>
      <div id="add-journal-title-container">
        <label htmlFor="add-journal-title">Title: </label>
        <input 
          name="name" 
          id="add-journal-title" 
          placeholder="Title of Your Day" 
          onChange={props.handleChange}
          maxLength={100}
          required
          value={form.name ? form.name : ''}  
        />
      </div>
      <div id="add-journal-date-container">
        <label htmlFor="">Date: </label>
        <input 
          type="date"
          name="date"
          id="add-journal-date"
          onChange={props.handleChange}
          pattern="\d{2}-\d{2}-\d{4}"
          value={form.date ? 
            new Date(form.date).toISOString().substring(0,10) 
            : 
            new Date().toISOString().substring(0,10)
          }
        />
      </div>
      <div id="add-journal-mood-container">
        <label htmlFor="add-journal-mood">Mood: </label>
        <select 
          name="mood" 
          id="add-journal-mood" 
          onChange={props.handleChange}
          value={form.mood ? form.mood : 2}
        >
          <option value={0}>🥺</option>
          <option value={1}>😐</option>
          <option value={2}>🙂</option>
          <option value={3}>😄</option>
          <option value={4}>🤩</option>
        </select>
      </div>
      <div id="add-journal-section-container">
        <label htmlFor="add-journal-section">What's on your mind?</label>
        <textarea 
          name="journal" 
          id="add-journal-section" 
          cols="35" rows="14" 
          placeholder="Today was really nice. I first woke up and..." 
          onChange={props.handleChange}
          required
          value={form.journal ? form.journal : ''}
        />
      </div>
    </>
  );
}

export default JournalInput;