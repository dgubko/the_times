import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card">
      {props.multimedia && <img src={props.multimedia[2].url} />}
      <div>
        <h3 className="title">{props.title}</h3>
        <p className="abstact">{props.abstract}</p>
        <Link to={`/details/${props.id}`}>Read more</Link>
      </div>
    </div>
  );
};
