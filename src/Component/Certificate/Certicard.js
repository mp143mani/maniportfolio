import React from "react";
import './Certificate.css'

function Certicard({Certificatedata}) {
  return (
    <div className="col-md-4 my-2">
      <div className="card shadow">
        <div className="inner">
          <img src={Certificatedata. cradimg} className="card-img-top" />
        </div>
        <div className="card-body nn">
          <h5 className="card-title">{Certificatedata.cardname}</h5>
          <a
            href={Certificatedata.cardbtn}
            type="button"
        className="btn btn-success my-lg-3 my-3 bt"
          >
            view certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certicard;
