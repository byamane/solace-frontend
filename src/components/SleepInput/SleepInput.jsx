const SleepInput = (props) => {
  return (  
    <>
      <div id="add-sleep-title-container">
        <label htmlFor="add-sleep-title">Title: </label>
        <input name="name" id="add-sleep-title" placeholder="Enter Title"></input>
      </div>
      <br />
      <div id="add-sleep-rating-container">
        <label htmlFor="add-sleep-rating">Rating: </label>
        <select name="rating" id="add-sleep-rating">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <br />
      <div id="add-sleep-notes-container">
        <label htmlFor="add-sleep-notes">Notes: </label>
        <br />
        <textarea name="notes" id="add-sleep-notes" cols="30" rows="10"></textarea>
      </div>
    </>
  );
}
 
export default SleepInput;