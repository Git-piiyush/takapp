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
import talkAstro from "../assests/talk_astro.json"
function CardComponent(props) {
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
          height="160px"
          src={props.imageUrl}
          alt="Card image cap"
          style={{ border: "1px solid black" }}
        />
        <CardBody className="p-2">
          <div className="d-flex flex-row">
            <div className="col-10 d-flex justify-content-start">
              <h5 className="" style={{textAlign:"left"}}>{props.name}</h5>
            </div>

            <div className="col-2">
              <h5 className="ml-0" style={{ color: "#ff944d" }}>
               {props.rating}
              </h5>
            </div>
          </div>

          <CardSubtitle
            tag="p"
            className="d-flex flex-row mb-2 text-muted mt-2 "
          >
            {props.skill[0]}
          </CardSubtitle>

          <div className="d-flex  align-items-start">
            <div className="col-3">
              <CardText>&#8377;{props.price}/min</CardText>{" "}
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
<div style={{ overflow: "hidden" , height:"250px"}}> 
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
      { talkAstro.Astrodata.map((result)=>{
return <CardComponent  name ={result.name}
rating={result.rating}
skill = {result.skills}
price = {result.price}
imageUrl = {result.imageUrl}
/>
      })  }
       
        
      </div>
      </div>
    </div>
  );
}

export default Talk;
