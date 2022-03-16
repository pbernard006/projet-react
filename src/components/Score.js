function Score({ data }) {
  console.log({ data });
  return (
    <div className="container-fluid bg-match">
      <div className="row">
        <div className="col-6 mt-4  mb-4 text-center">
          <span className="text-light fs-2">{data?.teams.home.name}</span>
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
        <div className="col-6 mt-4 mb-4 text-center">
          <span className="text-light fs-2 ">{data?.teams.away.name}</span>
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
