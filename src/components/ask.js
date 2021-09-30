import React, { useState } from "react";
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
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import QuesCategory from "../assests/question_category.json";

const CardComponent = (props) => {
  const [item, setitem] = useState("");
  return (
    <div className="d-flex  justify-content-center">
      <Card
        className="d-flex flex-column py-2 px-3"
        style={{
          width: "95%",
          height: "135px",
          border: "none",
          backgroundColor: "#f1f2fa",
        }}
      >
        <div className="d-flex justify-content-start">
          <strong>Choose category</strong>
        </div>
        <div className="py-3">
          {/* dropdown */}
          <div
            className="d-flex justify-content-center"
            style={{ border: "none", borderRadius: "0px" }}
          >
            <select
              className="text-muted"
              style={{
                backgroundColor: "#fff",
                width: "100%",
                height: "35px",
                borderRadius: "4px",
                padding: "5px",
              }}
              onChange={(e) => {
                const selectedItem = e.target.value;
                setitem(selectedItem);
              }}
            >
              <option selected disabled="true" value={item}>
                Select a category: Love, career, more..
              </option>
              {QuesCategory.data.map((result) => {
                return <option key={result.id}>{result.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="d-inline-flex align-items-baseline">
          <div
            className="col-5 d-flex justify-content-start"
            style={{ fontSize: "12px" }}
          >
            <b> &#x20B9; {item.price} </b> (including GST)
          </div>
          <div className="col-4" style={{ fontSize: "12px" }}>
            <b>Ideas what to ask</b>
          </div>
          <div className="">
            <Button
              className="py-1"
              style={{
                fontSize: "10px",
                backgroundColor: "#ff944d",
                border: "none",
                borderRadius: "6px",
                paddingLeft:"4px",
                paddingRight:"4px",
              }}
            >
              Ask a question 
              {console.log({item})}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Ask = (props) => {
  return (
    <div>
      <Ctext heading={"Ask a Question"} isValid={false}>
        Seek accurate answers to your life problems and guide you towards the
        right path. Whether the problem is related to love, self, life,
        buisness, money, education or work our astrologers will do an indepth
        study of your birth chart provide personalized responses along with
        remedies.
      </Ctext>

      {/* Card */}
      <CardComponent />
    </div>
  );
};

export default Ask;
