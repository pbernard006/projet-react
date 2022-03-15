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
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': '',
                'x-rapidapi-key': '',
            },
        });
        const dt = await response.json();
        console.log(dt);
        setData(dt);
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container px-2">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {data?.response.map((match) => (
                        <div className="col-6 col-md-4" key={match.fixture.id}>
                            <p>{match.teams.home.name}</p>
                            <p>vs</p>
                            <p>{match.teams.away.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
