import "./Page404.scss";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="page404">
      <h1>404 error</h1>
      <p>This page doesn't exist.</p>
      <p>
        Would you like to <Link to="/">Go back</Link> to the main page?
      </p>
    </div>
  );
};
