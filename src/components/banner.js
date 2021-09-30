import React from "react";

function Banner() {
  return (
    <div
      className="d-flex flex-row justify-content-start"
      style={{
        height: "100px",
        width: "100%",
        marginBottom: "40px",
        marginTop: "70px",
      }}
    >
      <div className="p-2">
        <blockquote>
          <p className="quotation">
            There is no better boat than horoscope to help man cross over the
            see.
          </p>

          <footer className="text-muted">-Varahamihira</footer>
        </blockquote>
      </div>

      <div
        className="p-4"
        style={{
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <img
          src="images/ganesha.png"
          width="100px"
          height="100px"
          style={{
            borderRadius: "50%",
            marginTop: "-24px",
            border: "2px solid blue",
            padding: "6px",
          }}
          alt="ganesha"
        />
      </div>
    </div>
  );
}

export default Banner;
