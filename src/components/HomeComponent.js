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
import { Loading } from "./LoadingComponent";
import Talk from "./talkComponent";
import Reports from "./reports";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ leader, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      //   <Card>
      //     <CardImg src={baseUrl + item.image} alt={item.name} />
      //     <CardBody>
      //       <CardTitle>{item.name}</CardTitle>
      //       {item.designation ? (
      //         <CardSubtitle>{item.designation}</CardSubtitle>
      //       ) : null}
      //       <CardText>{item.description}</CardText>
      //     </CardBody>
      //   </Card>
      <Card
        style={{
          height: "310px",
          width: "290px",
          transform: "scale(0.5)",
          //   border: "none",
        }}
      >
        <CardImg
          style={{
            marginLeft: "85px",
            marginTop: "35px",
            minHeight: "130px",
            maxHeight: "130px",
            width: "130px",
            borderBottomLeftRadius: 65,
            borderBottomRightRadius: 65,
            borderTopLeftRadius: 65,
            borderTopRightRadius: 65,
            backgroundColor: "blue",
          }}
          src={"/"}
          alt={"I am"}
        />
        {/* baseUrl + leader.img */}
        <CardBody style={{ marginTop: "20px" }}>
          <CardTitle tag="h1">
            <strong>Piyush</strong>
          </CardTitle>
          <br />
          <CardSubtitle tag="h2" className="mb-2 text-muted">
            April'21-March'23
          </CardSubtitle>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  //   const leade = props.leaders.map((leader) => {
  //     return (
  //       <div
  //         className="col-12 col-md-4 "
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           marginBottom: "20px",
  //         }}
  //       >
  //         <RenderCard leader={leader} />
  //       </div>
  //     );
  //   });
  return (
    <div>
      <Jumbotron>
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

      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <div className="row d-flex-row ">
              <div className="col-7 mr-2">
                <h2 style={{ marginLeft: 0 }}>
                  <strong>Daily horoscope</strong>
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
                  Read your daily horoscope based on sunshine, select your
                  zodiac sign and give right start to your day.
                </p>
              </div>
              <RenderCard />
            </div>
            <Talk />
            <Reports />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
