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
      <Banner/>
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
