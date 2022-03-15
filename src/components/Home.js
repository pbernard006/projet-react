import { useEffect, useState } from "react";
import calendar from "../data/calendar.json";
import "../styles/styles.css";
import "axios";

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
// }
// async function getMatchs(apiURL) {
//   var matchs = await fetch(apiURL, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//       "x-rapidapi-key": "b765d7acc5msh11d7c25074b4788p1826bbjsn1a189c7d77d3",
//     },
//   });
//   return matchs;
// }

function Home() {
  const apiURL =
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&next=10&round=Regular%20Season%20-%2027                         ";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function toggle() {
    setIsLoading(false);
  }
  async function getData(apiURL) {
    await fetch(apiURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "",
        "x-rapidapi-key": "",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log(response.response))
      .then((response) => setData(response.response))
      .then(() => setIsLoading(false));
  }
  useEffect(() => {
    getData(apiURL);
  }, [isLoading]);
  return (
    <div className="container px-2">
      {isLoading && <div onLoad={toggle}>Loading...</div>}
      {!isLoading && <div>{data}</div>}
    </div>
  );
}

export default Home;
