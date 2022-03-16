import { useState } from "react";

function Lineup({ data }) {
  const [home, setHome] = useState(true);
  const [away, setAway] = useState(false);

  function clickOnHome() {
    setHome(true);
    setAway(false);
  }

  function clickOnAway() {
    setHome(false);
    setAway(true);
  }

  if (data?.fixture.status.short === "NS") {
    return (
      <div className="row text-center statistiques mt-1">
        <span>Les compositions ne sont pas encore disponibles</span>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="row mb-2">
        <div className="radio col-5" onClick={clickOnHome}>
          <span
            className={`${
              home ? "btn-secondary-selected" : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            {data?.teams.home.name}
          </span>
        </div>
        <div className="radio col-5" onClick={clickOnAway}>
          <span
            className={`${
              away ? "btn-secondary-selected" : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            {data?.teams.away.name}
          </span>
        </div>
      </div>

      {home && (
        <>
          <span className="lineup-informations">
            Formation : {data.lineups[0].formation} / Entraineur :
            {data.lineups[0].coach.name}
          </span>
          <div className="lineup py-5">
            <div className="text-center row">
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[10].player.name}
                </span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[9].player.name}
                </span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[8].player.name}
                </span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[7].player.name}
                </span>
              </div>
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[6].player.name}
                </span>
              </div>
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[5].player.name}
                </span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[4].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[3].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[2].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[1].player.name}
                </span>
              </div>
              <br />
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[0].startXI[0].player.name}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {away && (
        <>
          <span className="lineup-informations">
            Formation : {data.lineups[1].formation} / Entraineur :
            {data.lineups[1].coach.name}
          </span>
          <div className="lineup py-5">
            <div className="text-center row">
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[10].player.name}
                </span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[9].player.name}
                </span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[8].player.name}
                </span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[7].player.name}
                </span>
              </div>
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[6].player.name}
                </span>
              </div>
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[5].player.name}
                </span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[4].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[3].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[2].player.name}
                </span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[1].player.name}
                </span>
              </div>
              <br />
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">
                  {data.lineups[1].startXI[0].player.name}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Lineup;
