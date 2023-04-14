import React from "react";

function Info({ data }) {
  return (
    <div className="info">
      <div className="info-logement">
        <h2 className="logement-title">{data.title}</h2>
        <span className="logement-location">{data.location}</span>
      </div>
      <div className="info-host">
        <div className="host-name">
          <span className="logement-host">{data.host.name.split(" ")[0]}</span>
          <span className="logement-host">{data.host.name.split(" ")[1]}</span>
        </div>
        <img
          className="logement-host-picture"
          src={data.host.picture}
          alt="Host"
        />
      </div>
    </div>
  );
}

export default Info;
