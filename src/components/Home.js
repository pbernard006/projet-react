import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import calendar from "../data/calendar.json";
import "../styles/styles.css";

// function buildURL() {
//   var apiURL =
//     "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&next=10&round=Regular%20Season%20-%20";
//   const today = new Date();
//   var matchweek = 0;
//   // On démarre la boucle à 1 car on souhaite accéder à i - 1
//   for (var i = 1; i < calendar.matchweek.length; i++) {
//     if (
//       Date.parse(today) >= Date.parse(calendar.matchweek[i - 1].end_date) &&
//       Date.parse(today) <= Date.parse(calendar.matchweek[i].end_date)
//     ) {
//       matchweek = calendar.matchweek[i].matchweek;
//       apiURL += matchweek;
//       console.log(apiURL);
//     }
//   }
//   return apiURL;
// }

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMatchweek, setCurrentMatchweek] = useState(true);
  const [lastMatchweek, setLastMatchweek] = useState(false);
  const [apiURL, setApiURL] = useState(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&next=10"
  );

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
    setData(dt);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [apiURL]);

  function clickOnCurrent() {
    setCurrentMatchweek(true);
    setLastMatchweek(false);
    setApiURL(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&next=10"
    );
  }

  function clickOnLast() {
    setCurrentMatchweek(false);
    setLastMatchweek(true);
    setApiURL(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&last=10"
    );
  }

  return (
    <div className="container px-2">
      <div className="row text-center mt-3">
        <div className="radio col" onClick={clickOnLast}>
          <span
            className={`${
              lastMatchweek
                ? "btn-secondary-selected"
                : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            Journée précédente
          </span>
        </div>
        <div className="radio col" onClick={clickOnCurrent}>
          <span
            className={`${
              currentMatchweek
                ? "btn-secondary-selected"
                : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            Journée actuelle
          </span>
        </div>
      </div>
      {loading ? (
        <div className=" mt-5 d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row px-2 py-2">
          {data?.response.map((match) => (
            <div
              key={match.fixture.id}
              className="col-12 col-md-6 col-lg-4 px-2 py-2"
            >
              <Link className="link" to={`/match/${match.fixture.id}`}>
                <div className="match-card">
                  <div className="row">
                    <div className="col-6 text-center">
                      <img
                        className="w-75 mt-4"
                        alt={match.teams.home.name}
                        src={match.teams.home.logo}
                      ></img>
                      <br />
                      {match.teams.home.name === "Paris Saint Germain" && (
                        <span className="mb-4 fs-3 text-light">PSG</span>
                      )}
                      {match.teams.home.name === "Stade Brestois 29" && (
                        <span className="mb-4 fs-3 text-light">
                          Stade Brestois
                        </span>
                      )}
                      {match.teams.home.name !== "Stade Brestois 29" &&
                        match.teams.home.name != "Paris Saint Germain" && (
                          <span className="mb-4 fs-3 text-light">
                            {match.teams.home.name}
                          </span>
                        )}
                    </div>
                    <div className="col-6 text-center">
                      <img
                        className="w-75 mt-4"
                        alt={match.teams.away.name}
                        src={match.teams.away.logo}
                      ></img>
                      <br />
                      {match.teams.away.name === "Paris Saint Germain" && (
                        <span className="mb-4 fs-3 text-light">PSG</span>
                      )}
                      {match.teams.away.name === "Stade Brestois 29" && (
                        <span className="mb-4 fs-3 text-light">
                          Stade Brestois
                        </span>
                      )}
                      {match.teams.away.name !== "Stade Brestois 29" &&
                        match.teams.away.name != "Paris Saint Germain" && (
                          <span className="mb-4 fs-3 text-light">
                            {match.teams.away.name}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* <div className="col-12 col-md-6 col-lg-4 px-2 py-2">
            <Link className="link" to={`/match/718614`}>
              <div className="match-card">
                <div className="row">
                  <div className="col-6 text-center">
                    <img
                      className="w-75 mt-4"
                      src="https://media.api-sports.io/football/teams/97.png"
                    ></img>
                    <br />
                    <span className="mb-4 fs-3 text-light">PSG</span>
                  </div>
                  <div className="col-6 text-center">
                    <img
                      className="w-75 mt-4"
                      src="https://media.api-sports.io/football/teams/80.png"
                    ></img>
                    <br />
                    <span className="mb-4 fs-3 text-light">ESTAC Troyes</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-2 py-2">
            <div className="match-card">
              <div className="row">
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/97.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lorient</span>
                </div>
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/80.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lyon</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-2 py-2">
            <div className="match-card">
              <div className="row">
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/97.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lorient</span>
                </div>
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/80.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lyon</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-2 py-2">
            <div className="match-card">
              <div className="row">
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/97.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lorient</span>
                </div>
                <div className="col-6 text-center">
                  <img
                    className="w-75 mt-4"
                    src="https://media.api-sports.io/football/teams/80.png"
                  ></img>
                  <br />
                  <span className="mb-4 fs-3 text-light">Lyon</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Home;
