import "./Categories.scss";

export const Categories = (props) => {
  const handleCategoryChange = (event) => {
    props.setCategory(event.target.id);
  };

  const allCaregories = [
    "arts",
    "automobiles",
    "movies",
    "politics",
    "science",
    "sports",
    "technology",
    "travel",
    "world",
    "us",
  ];

  return (
    <div className="categories">
      {allCaregories.map((item) => {
        return (
          <button
            className={props.category === item ? "active" : ""}
            onClick={handleCategoryChange}
            id={item}
            disabled={props.category === item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
