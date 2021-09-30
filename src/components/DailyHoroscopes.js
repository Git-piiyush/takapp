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
import horoscopeData from "../assests/horoscope_json.json"
function RenderCard(props) {
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
        src="images/horoscope.png"
        alt={"horoscope"}
      />
      
      <CardBody
        className="px-0"
        style={{ marginTop: "-9px", fontSize: "12px" , textTransform:"capitalize"}}
      >
        <CardTitle tag="h6">
          <strong>{props.name}</strong>
        </CardTitle>
        <br />
        <CardSubtitle
          tag="p"
          className="mb-2 text-muted"
          style={{ marginTop: "-13px" }}
        >
          {props.date}
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
      <div style={{ overflow: "hidden" , height:"130px"}}> 
      <div
        className="d-flex flex-row"
        style={{ overflow: "auto", paddingBottom:"20px"}}
      >
        { horoscopeData.data.map((result)=>{
return <RenderCard name={result.name}
date={result.date}/>
        })
          
        }
        
      </div>
      </div>
    </div>
  );
}

export default DailyHoroscopes;
