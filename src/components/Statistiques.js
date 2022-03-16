function Statistiques({ data }) {
  if (data?.fixture.status.short === "NS") {
    return (
      <div className="row text-center statistiques mt-1">
        <span className="fw-bold mb-3">Stade : {data?.fixture.venue.name}</span>

        <span>Les statistiques du match ne sont pas encore disponibles</span>
      </div>
    );
  }

  return (
    <div className="row text-center statistiques mt-1">
      <span className="fw-bold mb-3">Stade : {data?.fixture.venue.name}</span>

      <div className="col-4">
        {data?.statistics[0].statistics[9].value == null
          ? 0
          : data?.statistics[0].statistics[9].value}
      </div>
      <div className="col-4">
        <span>Possession</span>
      </div>
      <div className="col-4">
        <span>{data?.statistics[1].statistics[9].value}</span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[2].value == null
          ? 0
          : data?.statistics[0].statistics[2].value}
        (
        {data?.statistics[0].statistics[0].value == null
          ? 0
          : data?.statistics[0].statistics[0].value}
        )
      </div>
      <div className="col-4">
        <span>Tirs (cadrés)</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[2].value == null
            ? 0
            : data?.statistics[1].statistics[2].value}
          (
          {data?.statistics[1].statistics[0].value == null
            ? 0
            : data?.statistics[1].statistics[0].value}
          )
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[7].value == null
          ? 0
          : data?.statistics[0].statistics[7].value}
      </div>
      <div className="col-4">
        <span>Corners</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[7].value == null
            ? 0
            : data?.statistics[1].statistics[7].value}
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[8].value == null
          ? 0
          : data?.statistics[0].statistics[8].value}
      </div>
      <div className="col-4">
        <span>Hors-jeu</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[8].value == null
            ? 0
            : data?.statistics[1].statistics[8].value}
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[12].value == null
          ? 0
          : data?.statistics[0].statistics[12].value}
      </div>
      <div className="col-4">
        <span>Arrêts</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[12].value == null
            ? 0
            : data?.statistics[1].statistics[12].value}
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[6].value == null
          ? 0
          : data?.statistics[0].statistics[6].value}
      </div>
      <div className="col-4">
        <span>Fautes</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[6].value == null
            ? 0
            : data?.statistics[1].statistics[6].value}
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[10].value == null
          ? 0
          : data?.statistics[0].statistics[10].value}
      </div>
      <div className="col-4">
        <span>Cartons jaunes</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[10].value == null
            ? 0
            : data?.statistics[1].statistics[10].value}
        </span>
      </div>
      <div className="col-4">
        {data?.statistics[0].statistics[11].value == null
          ? 0
          : data?.statistics[0].statistics[11].value}
      </div>
      <div className="col-4">
        <span>Cartons rouges</span>
      </div>
      <div className="col-4">
        <span>
          {data?.statistics[1].statistics[11].value == null
            ? 0
            : data?.statistics[1].statistics[11].value}
        </span>
      </div>
    </div>
    /*<div className="row text-center statistiques mt-1">
            <span className="fw-bold mb-3">Stade : Matmut Atlantique</span>
            <div className="col-4">70</div>
            <div className="col-4">
                <span>Possession</span>
            </div>
            <div className="col-4">
                <span>30</span>
            </div>
            <div className="col-4">4</div>
            <div className="col-4">
                <span>Tirs cadrés</span>
            </div>
            <div className="col-4">
                <span>3</span>
            </div>
            <div className="col-4">7</div>
            <div className="col-4">
                <span>Fautes</span>
            </div>
            <div className="col-4">
                <span>11</span>
            </div>
            <div className="col-4">2</div>
            <div className="col-4">
                <span>Corners</span>
            </div>
            <div className="col-4">
                <span>3</span>
            </div>
        </div>*/
  );
}

export default Statistiques;
