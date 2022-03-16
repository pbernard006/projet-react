import { useState } from "react";

function Lineup() {
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

  return (
    <div className="mt-4">
      <div className="row mb-2">
        <div className="radio col-2" onClick={clickOnHome}>
          <span
            className={`${
              home ? "btn-secondary-selected" : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            Domicile
          </span>
        </div>
        <div className="radio col-2" onClick={clickOnAway}>
          <span
            className={`${
              away ? "btn-secondary-selected" : "btn-secondary-not-selected"
            } btn-secondary fs-6 px-1 py-1`}
          >
            Exterieur
          </span>
        </div>
      </div>

      {home && (
        <>
          <span className="lineup-informations">
            Formation : 4-2-3-1 / Entraineur : H.Barsacq
          </span>
          <div className="lineup py-5">
            <div className="text-center row">
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
            </div>
          </div>
        </>
      )}
      {away && (
        <>
          <span className="lineup-informations">
            Formation : 4-2-3-1 / Entraineur : Zizou
          </span>
          <div className="lineup py-5">
            <div className="text-center row">
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-4">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-6">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <br />
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <div className="col-3">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
              <br />
              <br />
              <div className="col-12">
                <span className="player-name px-1 py-1 fs-6">Mbappe</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Lineup;
