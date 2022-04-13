const JournalInput = (props) => {
  const form = props.form
  return ( 
    <>
      <div id="add-sleep-title-container">
        <label htmlFor="add-journal-title">Title: </label>
        <input 
          name="name" 
          id="add-journal-title" 
          placeholder="Title of Your Day" 
          onChange={props.handleChange}
          required
          value={form.name ? form.name : ''}  
        />
      </div>
      <br />
      <div id="add-sleep-rating-container">
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
      <br />
      <div id="add-sleep-notes-container">
        <label htmlFor="add-journal-section">What's on your mind?</label>
        <br />
        <textarea 
          name="journal" 
          id="add-journal-section" 
          cols="40" rows="10" 
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