import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Score from './Score';
import Statistiques from './Statistiques';

function Match() {
    const { id } = useParams();
    const apiURL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?id=' + id;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getData = async () => {
    //     setLoading(true);
    //     const response = await fetch(apiURL, {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-host': `${process.env.REACT_APP_API_HOST}`,
    //             'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
    //         },
    //     });
    //     const dt = await response.json();
    //     console.log(dt);
    //     setData(dt.response[0]);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div>
            {loading ? (
                <div className=" mt-5 d-flex justify-content-center ">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                // Score
                // <div className="match-card">
                //     <div className="row">
                //         <div className="col-6 text-center">
                //             <span className="text-light">{data?.teams.home.name}</span>
                //             <br />
                //             <span className="text-light">{data?.goals.home}</span>
                //         </div>
                //         <div className="col-6 text-center">
                //             <span className="text-light">{data?.teams.away.name}</span>
                //             <br />
                //             <span className="text-light">{data?.goals.away}</span>
                //         </div>
                //     </div>
                // </div>
                <div>
                    <Score />
                    <div className="container">
                        <Statistiques />
                        <div className="mt-4">
                            <div className="line-up"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Match;
