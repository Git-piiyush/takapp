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
import Ctext from "./Ctext";

function RenderCard() {
  return (
    <Card
      className="d-flex align-items-center"
      style={{
        height: "150px",
        minWidth: "130px",
        textAlign: "center",
        transform: "scale(0.9)",
        marginLeft: "-5.8px",
        border: "none",
      }}
    >
      <CardImg
        style={{
          marginTop: "12px",
          minHeight: "65px",
          maxHeight: "65px",
          width: "70px",
          borderRadius: "50%",
          backgroundColor: "blue",
        }}
        src={"/"}
        alt={"horoscope"}
      />
      {/* baseUrl + leader.img */}
      <CardBody
        className="px-0"
        style={{ marginTop: "-9px", fontSize: "12px" }}
      >
        <CardTitle tag="h6">
          <strong>Piyush</strong>
        </CardTitle>
        <br />
        <CardSubtitle
          tag="p"
          className="mb-2 text-muted"
          style={{ marginTop: "-13px" }}
        >
          April'21-September'23
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

function DailyHoroscopes() {
  return (
    <div>
      <Ctext heading={"Daily Horoscopes"} isValid={true}>
        Read your daily horoscope based on your sunsign, select your zodiac sign
        and give the right start to your day.
      </Ctext>
      <div
        className="d-flex flex-row"
        style={{ overflow: "auto", WebkitOverflowScrolling: "auto" }}
      >
        <RenderCard />
        <RenderCard />
        <RenderCard />
        <RenderCard />
        <RenderCard />
        <RenderCard />
      </div>
    </div>
  );
}

export default DailyHoroscopes;
