import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <>
      <button className="cursor-pointer hover:text-main-red smooth-hover">
        <FaSearch />
      </button>
    </>
  );
};

export default SearchButton;
