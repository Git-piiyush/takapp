import React from "react";
import Ctext from "./Ctext";
import background from "../report.png"
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
import ReportsData from "../assests/reports_json.json"
function CardComponent(props) {
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
          marginBottom:"8px",
          backgroundImage: `url(${background})` ,
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
            &#x20B9; {props.price}/min
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
<div style={{ overflow: "hidden" , height:"170px"}}> 
      <div
        className="d-flex flex-row px-2"
        style={{ overflow: "auto"}}
      >
      {
        ReportsData.data.map((result)=>{
          return <CardComponent price={result.price} />
        })
      }
        
      </div>
      </div>
    </div>
  );
}

export default reports;
