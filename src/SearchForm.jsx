import { useGlobalContext } from "./context";

const SearchBox = () => {
  const {setSearchTerm} = useGlobalContext();
  const handleSubmit = () => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

    return (
      <section>
        <h1 className="title">Unsplash Images</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input search-input"
            name="search"
            placeholder="Cat"
          />
          <button type="submit" className="btn">Search</button>
        </form>
      </section>
    );
  };
  export default SearchBox;
  