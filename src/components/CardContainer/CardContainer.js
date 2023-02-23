import "./CardContainer.scss";
import { Card } from "../Card/Card";

export const CardContainer = (props) => {
  return (
    <div className="card-container">
      {props.news.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
