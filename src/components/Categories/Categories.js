import "./Categories.scss";

export const Categories = (props) => {
  const handleCategoryChange = (event) => {
    props.setCategory(event.target.id);
  };

  return (
    <div className="categories">
      <button onClick={handleCategoryChange} id="arts">
        arts
      </button>
      <button onClick={handleCategoryChange} id="automobiles">
        automobiles
      </button>
      <button onClick={handleCategoryChange} id="movies">
        movies
      </button>
      <button onClick={handleCategoryChange} id="politics">
        politics
      </button>
      <button onClick={handleCategoryChange} id="science">
        science
      </button>
      <button onClick={handleCategoryChange} id="sports">
        sports
      </button>
      <button onClick={handleCategoryChange} id="technology">
        technology
      </button>
      <button onClick={handleCategoryChange} id="travel">
        travel
      </button>
      <button onClick={handleCategoryChange} id="world">
        world
      </button>
      <button onClick={handleCategoryChange} id="us">
        us
      </button>
    </div>
  );
};
