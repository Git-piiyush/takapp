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
import { IoPersonSharp } from "react-icons/io5";
import ReviewData from "../assests/reviews_json.json"
const ReviewCard = (props) => {
  return (
    <div>
      <div className="d-flex flex-row">
        <Card
          style={{
            height: "320px",
            width: "290px",
            transform: "scale(0.8)",
            border: "1px solid grey",
            marginTop: "-32px",
            marginLeft: "-20px",
            boxShadow: "2px 5px grey",
          }}
          className="d-flex flex-column justify-content-center"
        >
          <div className="d-flex"></div>
          <CardText
            style={{
              maxHeight: "250px",
              minHeight: "250px",
              overflow: "hidden",
            }}
            className="px-1 py-3"
          >
           
            <div className="quotation-review">
             <div className="big-qoute d-flex flex-row"> &#34;</div>
              <p  style={{textAlign:"left" ,marginTop:"30px"}}>
                {props.comment}
              </p>
            </div>
          </CardText>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "50px",
              marginTop: "-60px",
              minHeight: "70px",
              maxHeight: "70px",
              width: "70px",
              borderRadius: "50%",
              backgroundColor: "#ff944d",
              color: "white",
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <IoPersonSharp size={42} />
          </div>
          <div className="d-flex">
            <CardBody
              style={{
                marginTop: "-80px",
                backgroundColor: "#f1f2fa",
                zIndex: "-1",
              }}
            >
              <CardTitle tag="h6" style={{ marginTop: "18px" }}>
                {props.name}
              </CardTitle>
              <br />
              <CardSubtitle
                tag="h2"
                className="text-muted"
                style={{ marginTop: "-30px", fontSize: "13px" }}
              >
                {props.district}, {props.country}
              </CardSubtitle>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
};

function reviews() {
  return (
    <div className="d-flex flex-column mt-3">
      <div className="col-10 d-flex justify-content-start">
        <h4> Hear from our happy customers!</h4>
      </div>

<div style={{overflow:"hidden" , height:"280px"}}>
      <div
        className="d-flex flex-row px-2 mt-3"
        style={{ overflow: "auto", WebkitOverflowScrolling: "auto" }}
      >
      { ReviewData.data.map((result)=>{
          return <ReviewCard name={result.name} comment={result.comment} country={result.location.country} district={result.location.district}/>
      })
        
} 
      </div>

       </div>
    </div>
  );
}

export default reviews;
