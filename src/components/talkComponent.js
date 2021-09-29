import React from "react";
import Ctext from "./Ctext";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

function CardComponent() {
  return (
    <div>
      <Card
        style={{
          height: "290px",
          width: "200px",
          transform: "scale(0.8)",
          border: "0.5px solid black",
          borderRadius: "10px",
          boxShadow: "2px 2px #888",
          marginLeft: "-20px",
        }}
      >
        <CardImg
          top
          width="160px"
          height="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
          style={{ border: "1px solid black" }}
        />
        <CardBody className="p-2">
          <div className="d-flex flex-row">
            <div className="col-10 d-flex justify-content-start">
              <h5 className="">Card title jhbsd</h5>
            </div>

            <div className="col-2">
              <h5 className="ml-0" style={{ color: "#ff944d" }}>
                4.6
              </h5>
            </div>
          </div>

          <CardSubtitle
            tag="p"
            className="d-flex flex-row mb-2 text-muted mt-2 "
          >
            Card subtitle vastu
          </CardSubtitle>

          <div className="d-flex  align-items-start">
            <div className="col-3">
              <CardText>&#8377;500/min</CardText>{" "}
            </div>

            <div className="d-flex col-9 ml-auto px-1 justify-content-end">
              <Button
                style={{
                  backgroundColor: "#ff944d",
                  boxShadow: "2px 2px #888",
                  fontSize: "17px",
                }}
              >
                Talk Now
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Talk() {
  return (
    <div>
      <Ctext heading={"Talk to astrologer"} isValid={true}>
        Leading astrologer of india are just a phone call awway. Our panel of
        astrologers not just provides solutions to your life problems but also
        guide you so that you can take the right path towards growth and
        prosperity.
      </Ctext>

      <div
        className="d-flex flex-row p-1"
        style={{
          overflow: "auto",
          WebkitOverflowScrolling: "auto",
          marginLeft: "20px",
          marginTop: "-20px",
          marginBottom: "-15px",
        }}
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default Talk;
