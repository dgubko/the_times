import "./Details.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Details = (props) => {
  const { id } = useParams();
  const article = props.articles.find((item) => item.id === Number(id));
  return (
    article && (
      <div className="details-main">
        {article.multimedia && <img src={article.multimedia[1].url} />}
        <h1>{article.title}</h1>
        <h3>{article.abstract}</h3>
        <p>Written: {article.byline}</p>
        <p>Created date: {article.created_date}</p>
        <Link to={article.url} target="_blank">
          Read full article
        </Link>
        <Link to="/">Go back</Link>
      </div>
    )
  );
};
