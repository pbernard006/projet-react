import { useEffect, useState } from 'react';
import calendar from '../data/calendar.json';
import '../styles/styles.css';

function buildURL() {
    var apiURL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&next=10&round=Regular%20Season%20-%20';
    const today = new Date();
    var matchweek = 0;
    // On démarre la boucle à 1 car on souhaite accéder à i - 1
    for (var i = 1; i < calendar.matchweek.length; i++) {
        if (Date.parse(today) >= Date.parse(calendar.matchweek[i - 1].end_date) && Date.parse(today) <= Date.parse(calendar.matchweek[i].end_date)) {
            matchweek = calendar.matchweek[i].matchweek;
            apiURL += matchweek;
            console.log(apiURL);
        }
    }
    return apiURL;
}

function Home() {
    const apiURL = buildURL();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getData = async () => {
    //     setLoading(true);
    //     const response = await fetch(apiURL, {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-host': '',
    //             'x-rapidapi-key': '',
    //         },
    //     });
    //     const dt = await response.json();
    //     console.log(dt);
    //     setData(dt);
    //     setLoading(false);
    // };
    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className="container px-2">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row px-2 py-2">
                    {/* {data?.response.map((match) => (
                        <div className="col-6 col-md-4 match-card" key={match.fixture.id}>
                            <p>{match.teams.home.name}</p>
                            <p>vs</p>
                            <p>{match.teams.away.name}</p>
                        </div>
                    ))} */}
                    <div className="col-6 col-md-4 px-2 py-2">
                        <div className="match-card">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/97.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lorient</span>
                                </div>
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/80.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lyon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 px-2 py-2">
                        <div className="match-card">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/97.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lorient</span>
                                </div>
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/80.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lyon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 px-2 py-2">
                        <div className="match-card">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/97.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lorient</span>
                                </div>
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/80.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lyon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 px-2 py-2">
                        <div className="match-card">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/97.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lorient</span>
                                </div>
                                <div className="col-6 text-center">
                                    <img class="w-75 mt-4" src="https://media.api-sports.io/football/teams/80.png"></img>
                                    <br />
                                    <span className="mb-4 fs-3 text-light">Lyon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
