import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const [loading, setLoading] = useState(true);
  var matchsInFavorites = [];
  matchsInFavorites.length = favorites.length;

  const getData = async () => {
    setLoading(true);
    for (var i = 0; i < favorites.length; i++) {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?id=" + favorites[i],
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": `${process.env.REACT_APP_API_HOST}`,
            "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const dt = await response.json();
      console.log(dt);
      matchsInFavorites[i] = dt;
    }

    setLoading(false);
    console.log(matchsInFavorites);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container px-2 pt-5rem">
      {loading ? (
        <div className=" mt-5 d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>Bravo tu es sur la page favorites</div>
      )}
    </div>
  );
}

export default Favorites;
