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

import DailyHoroscopes from "./DailyHoroscopes";
import Talk from "./talkComponent";
import Reports from "./reports";
import Ask from "./ask";
import Reviews from "./reviews";
import Banner from "./banner";

function Home(props) {
  return (
    <div className="px-2">
      <Banner />
      <Jumbotron className="mt-5">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>

      {/* <Page2 /> */}
      <DailyHoroscopes />
      <Talk />
      <Reports />
      <Ask />
      <Reviews />
      <div className="text-muted mt-3">
        &copy; Copyright 2020 All Rights Reserved
      </div>
      <div style={{ marginBottom: "70px" }}></div>
    </div>
  );
}

export default Home;
