import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Score({ data, id }) {
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    setFavorite(!favorite);
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ id }));
  };

  console.log({ data });
  return (
    <div className="container-fluid bg-match pt-5rem">
      <div className="row">
        <div className="col-12">
          <div className="text-end">
            <i
              className={`${favorite ? "fas" : "far"} fa-heart fs-2 mt-2 red`}
              onClick={addToFavorite}
            ></i>
          </div>
        </div>
        <div className="col-6 mt-1 mb-4 text-center">
          {data?.teams.home.name === "Paris Saint Germain" && (
            <span className="text-light fs-2">PSG</span>
          )}
          {data?.teams.home.name === "Stade Brestois 29" && (
            <span className="text-light fs-2">Stade Brestois</span>
          )}
          {data?.teams.home.name !== "Paris Saint Germain" &&
            data?.teams.home.name !== "Stade Brestois 29" && (
              <span className="text-light fs-2">{data?.teams.home.name}</span>
            )}
          <br />
          <div className="score">
            {data?.fixture.status.short === "NS" && (
              <span className="text-light fs-2">0</span>
            )}
            {data?.fixture.status.short !== "NS" && (
              <span className="text-light fs-2">
                {data?.score.fulltime.home}
              </span>
            )}
          </div>
        </div>
        <div className="col-6 mt-1 mb-4 text-center">
          {data?.teams.away.name === "Paris Saint Germain" && (
            <span className="text-light fs-2">PSG</span>
          )}
          {data?.teams.away.name === "Stade Brestois 29" && (
            <span className="text-light fs-2">Stade Brestois</span>
          )}
          {data?.teams.away.name !== "Paris Saint Germain" &&
            data?.teams.away.name !== "Stade Brestois 29" && (
              <span className="text-light fs-2">{data?.teams.away.name}</span>
            )}
          <br />
          <div className="score">
            {data?.fixture.status.short === "NS" && (
              <span className="text-light fs-2">0</span>
            )}
            {data?.fixture.status.short !== "NS" && (
              <span className="text-light fs-2">
                {data?.score.fulltime.away}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
    /* 
        <div className="container-fluid bg-match">
            <div className="row">
                <div className="col-6 mt-4  mb-4 text-center">
                    <span className="text-light fs-2">Bordeaux</span>
                    <br />
                    <div className="score">
                        <span className="text-light fs-2">0</span>
                    </div>
                </div>
                <div className="col-6 mt-4 mb-4 text-center">
                    <span className="text-light fs-2 ">Stade Brestois</span>
                    <br />
                    <div className="score">
                        <span className="text-light fs-2">0</span>
                    </div>
                </div>
            </div>
        </div>
        */
  );
}

export default Score;
