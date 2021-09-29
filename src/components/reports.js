import React from "react";
import Ctext from "./Ctext";
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

function CardComponent() {
  return (
    <div>
      <Card
        className="d-flex flex-column-reverse"
        style={{
          height: "170px",
          width: "250px",
          transform: "scale(1)",
          border: "1px solid black",
          marginLeft: "5px",
          borderRadius: "10px",
        }}
      >
        <div
          className="d-flex flex-row align-items-center"
          style={{
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div className="d-flex col-7 px-3" style={{ color: "white" }}>
            {" "}
            &#x20B9; 999/min
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#ff944d",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function reports() {
  return (
    <div>
      <Ctext heading={"Reports"} isValid={true}>
        Astrology report or what is commonly known as Horoscope report is
        basically an in depth look at your birth chart. Horoscope report will
        look at various planetary positions in your birth charts and also derive
        relationships and angle to the understand your personality and trait.
      </Ctext>

      <div
        className="d-flex flex-row px-2"
        style={{ overflow: "auto", WebkitOverflowScrolling: "auto" }}
      >
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default reports;
