import './ThemeSelect.css'

const ThemeSelect = (props) => {
  // console.log(props)
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
          {/* Theme */}
        </button>
      </div>
    </>
  );
}
 
export default ThemeSelect;