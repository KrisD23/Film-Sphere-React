import PropTypes from "prop-types";
import { useState } from "react";
import searchIcon from "../assets/search.svg";

const SearchBar = ({ onSearch, initialValue = "" }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for movies"
        />
        <button type="submit" className="search-button" aria-label="Search">
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
};

export default SearchBar;
