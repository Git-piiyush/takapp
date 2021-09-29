import React from "react";
import { Button } from "reactstrap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMedal, IoLanguageSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

function CardComponent() {
  return (
    <div className="px-2">
      <div
        className="d-flex flex-row flex-grow-1 py-2"
        width="100%"
        style={{
          height: "auto",
          minHeight: "150px",
          marginTop: "15px",
          borderTop: "1px solid grey",
        }}
      >
        <div className="col-4">
          <img
            src="/"
            alt=""
            height="60%"
            width="90%"
            style={{ marginTop: "10px" }}
          ></img>
        </div>

        <div className="col-8">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row" style={{ fontSize: "18px" }}>
              <div className="d-flex flex-row col-8">
                <strong>Name</strong>
              </div>
              <div className="d-flex flex-row justify-content-end col-4 text-muted">
                <h6> 25 Years </h6>
              </div>
            </div>
            <div className="col-10">
              <div className="d-flex flex-row">
                <div className="col-2">
                  <AiOutlineSafetyCertificate className="react-icon" />
                </div>
                <div className="">
                  Coffe Cup Reading, Falit Jyotish, Kundali Grah Dosh, VAstu,
                  Astrology, Palmistry, Face REading
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-2">
                  <IoLanguageSharp className="react-icon" />
                </div>
                <div className="">English, Hindi</div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-2">
                  <IoMedal className="react-icon" />
                </div>
                <div className="">1000/Min</div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-2" style={{ marginLeft: "30px" }}>
            <Button
              className="px-3"
              style={{
                backgroundColor: "#ff944d",
                boxShadow: "2px 2px 2px #888888",
              }}
            >
              <FiPhone /> Talk on Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="d-flex flex-column p-2" style={{ marginTop: "70px" }}>
      <div className="d-flex flex-row" style={{ height: "30px" }}>
        <div className="col-9  d-flex flex-row justify-content-start">
          <h5>Talk to Astrologer</h5>
        </div>
        <div className="col-1">
          <img
            src="assets/images/search.png"
            width="25px"
            height="25px"
            alt="Search icon"
          />
        </div>
        <div className="col-1">
          <img
            src="assets/images/filter.png"
            width="25px"
            height="25px"
            alt="Filter icon"
          />
        </div>
        <div className="col-1">
          <img
            src="assets/images/sort.png"
            width="25px"
            height="25px"
            alt="Sort icon"
          />
        </div>
      </div>

      <div className="d-flex flex-column" style={{ marginTop: "-10px" }}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default Page2;
