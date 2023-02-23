import "./App.css";
import { Header } from "../Header/Header";
import { CardContainer } from "../CardContainer/CardContainer";
import { Categories } from "../Categories/Categories";
import { Details } from "../Details/Details";
import { Page404 } from "../Page404/Page404";
import { getNews } from "../../apiCalls/getWorldNews";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [newsArticles, setNewArticles] = useState([]);
  const [category, setCategory] = useState("world");
  const [error, setError] = useState("");

  useEffect(() => {
    getNews(category)
      .then((data) => {
        setNewArticles(
          data.results.map((item, index) => {
            return { id: index + 1, ...item };
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [category]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories setCategory={setCategory} category={category} />
              {error ? (
                <p className="error-message">{error}</p>
              ) : (
                <CardContainer
                  news={newsArticles.filter((item) => item.title)}
                />
              )}
            </>
          }
        />
        <Route
          path="/details/:id"
          element={<Details articles={newsArticles} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
