import './SearchBox.scss'
const SearchBox = (props)=>{
    const {label,searchTerm,handleInput}=props;
    return (
        <form className="search-box">
          <label>
            Beer Search
          </label>
          <input type="text"
            name={label}
            value={searchTerm} 
            onInput={handleInput}
            />
        </form>
      );
    };
export default SearchBox;