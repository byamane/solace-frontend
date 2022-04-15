import './ThemeSelect.css'

const ThemeSelect = (props) => {
  return (  
    <>
      <div id='theme-btns-container'>
        <button
          id='theme-btn'
          style={{
            backgroundImage: `url(${props.img})`
          }}
          onClick={() => props.handleBgChange(props.idx)}
        >
        </button>
      </div>
    </>
  );
}
 
export default ThemeSelect;