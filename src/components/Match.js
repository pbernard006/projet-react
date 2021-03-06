import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lineup from "./Lineup";
import Score from "./Score";
import Statistiques from "./Statistiques";

function Match() {
  const { id } = useParams();
  const apiURL = "https://api-football-v1.p.rapidapi.com/v3/fixtures?id=" + id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${process.env.REACT_APP_API_HOST}`,
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
      },
    });
    const dt = await response.json();
    console.log(dt);
    setData(dt.response[0]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" pt-5rem mt-5 d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <Score data={data} id={id} />
          <div className="container">
            <Statistiques data={data} />
            <Lineup data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Match;
