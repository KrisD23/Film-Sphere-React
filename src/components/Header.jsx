import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

const Header = ({ onSearch, initialSearchTerm }) => {
  return (
    <header className="header">
      <h1>FilmSphere</h1>
      <SearchBar onSearch={onSearch} initialValue={initialSearchTerm} />
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialSearchTerm: PropTypes.string,
};

export default Header;
