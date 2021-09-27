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
function reports() {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <h2>
            <strong>Reports</strong>
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
            Astrology report or what is commonly known as Horoscope report is
            basically an in depth look at your birth chart. Horoscope report
            will look at various planetary positions in your birth charts and
            also derive relationships and angle to the understand your
            personality and trait.
          </p>
        </div>
      </div>

      <div>
        <Card
          style={{
            height: "200px",
            width: "300px",
            transform: "scale(1)",
            //   border: "none",
          }}
        >
          <div className="d-flex flex-column">
            <div className="row-9" style={{ border: "1px solid black" }}>
              <CardImg
                top
                width="100%"
                height="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="d-flex-row"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default reports;
