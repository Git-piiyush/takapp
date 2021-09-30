import React from "react";

function Ctext(props) {
  return (
    <div className="d-flex flex-column p-2 mt-2">
      <div className="d-flex flex-row align-items-baseline">
        <div className="d-flex col-9 justify-content-start">
          <h4>{props.heading}</h4>
        </div>

       { (props.isValid) && <div className="d-flex col-3 justify-content-end">
          <a
            href="/"
            style={{ textDecoration: "none", color: "orange" }}
            tag="h2"
          >
            <strong>See All &gt;</strong>
          </a>
        </div> }

        
      </div>
      <div className="d-flex flex-row justify-content-start" style={{textAlign:"left"}}>
        {props.children}
      </div>
    </div>
  );
}

export default Ctext;
