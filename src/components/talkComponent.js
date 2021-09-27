import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Jumbotron,
  Button,
} from "reactstrap";

function Talk() {
  return (
    <div>
      <div className="row d-flex-row ">
        <div className="col-9 ml-0">
          <h2 style={{ marginLeft: 0 }}>
            <strong>Talk to an astrologer</strong>
          </h2>
        </div>
        <div className="col-3">
          <a
            href="/"
            style={{ textDecoration: "none", color: "orange" }}
            tag="h2"
          >
            <strong>See all &gt;</strong>
          </a>
        </div>
        <div>
          <p>
            Leading astrologer of india are just a phone call awway.Our panel of
            astrologers not just provides solutions to your life probelms but
            also guide you so that you can take the right path towards growth
            and prosperity.
          </p>
        </div>
      </div>

      <div>
        <Card
          style={{
            height: "310px",
            width: "200px",
            transform: "scale(0.8)",
            //   border: "none",
          }}
        >
          <CardImg
            top
            width="100%"
            height="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
            style={{ border: "1px solid black" }}
          />
          <CardBody>
            <div className="d-flex justify-content-start">
              <div className="col-9 px-1">
                <h5 className="">Card title jhb</h5>
              </div>

              <div className="col-3">
                <h5 className="ml-0">4.6</h5>
              </div>
            </div>

            <CardSubtitle
              tag="p"
              className="d-flex flex-row mb-2 text-muted mt-2 "
            >
              Card subtitle
            </CardSubtitle>

            <div className="d-flex  align-items-baseline">
              <div className="col-3">
                <CardText>500/min</CardText>{" "}
              </div>

              <div className="col ml-auto px-2">
                <Button>Talk Now</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Talk;
