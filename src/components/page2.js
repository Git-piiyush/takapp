import {React, useState} from "react";
import { Button } from "reactstrap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMedal, IoLanguageSharp } from "react-icons/io5";
import {IoMdSearch } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import {ImCross} from "react-icons/im" ;

import talkAstro from "../assests/talk_astro.json"

function CardComponent(props) {
  return (
    <div className="px-2">
      <div
        className="d-flex flex-row flex-grow-1 py-2"
        width="100%"
        style={{
          height: "auto",
          minHeight: "150px",
          marginTop: "15px",
          borderTop: "1px solid grey",
        }}
      >
        <div className="col-4">
          <img
            src={props.imageUrl}
            alt=""
            width="90%"
            style={{ marginTop: "10px" , height:"90px"}}
          ></img>
        </div>

        <div className="col-8">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row" style={{ fontSize: "18px" }}>
              <div className="d-flex flex-row col-8">
                <strong>{props.name}</strong>
              </div>
              <div className="d-flex flex-row justify-content-end col-4 text-muted">
                <h6>{props.experience} Years</h6>
              </div>
            </div>
            <div className="col-10">
              <div className="d-flex flex-row">
                <div className="col-2">
                  <AiOutlineSafetyCertificate className="react-icon" />
                </div>
                <div  style={{textAlign:"left"}}>
                {props.skills.join(", ")}
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-2">
                  <IoLanguageSharp className="react-icon" />
                </div>
                <div className="text-left">{props.languages.join(", ")}</div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-2">
                  <IoMedal className="react-icon" />
                </div>
                <div className="">{props.price}/Min</div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-2" style={{ marginLeft: "30px" }}>
            <Button
              className="px-3"
              style={{
                backgroundColor: "#ff944d",
                boxShadow: "2px 2px 2px #888888",
              }}
            >
              <FiPhone /> Talk on Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page2() {

  const [searchTerm , setSearchTerm] = useState("");
  const [display , setDisplay] = useState("d-none");
  return (
    <div className="d-flex flex-column p-2" style={{ marginTop: "70px" }}>
      <div className="d-flex flex-row" style={{ height: "30px" }}>
        <div className="col-9  d-flex flex-row justify-content-start">
          <h5>Talk to Astrologer</h5>
        </div>
        <div className="col-1">
          <a onClick={()=>setDisplay("")}><img
            src="images/search.png"
            width="25px"
            height="25px"
            alt="Search icon"
          />
          </a>
        </div>
        <div className="col-1">
          <img
            src="images/filter.png"
            width="25px"
            height="25px"
            alt="Filter icon"
          />
        </div>
        <div className="col-1">
          <img
            src="images/sort.png"
            width="25px"
            height="25px"
            alt="Sort icon"
          />
        </div>
      </div>

{/* Search Bar */}
<div className={`d-flex flex-row ${display}`} style={{ height:"50px" , border:"none" , marginTop:"5px" , backgroundColor:"#f1f2fa" ,borderRadius:"5px"}}>

<div className="col-2 d-flex flex-row align-items-center justify-content-center"> < IoMdSearch size={28} color="#ff944d"/></div>
<input className="input col-9 text-muted" 
style={{ backgroundColor:"#f1f2fa" , fontSize:"18px", fontWeight:"600" , border:"none"}}
type="text" placeholder="Search Astrologer" onChange={(event)=>{
  setSearchTerm(event.target.value);
}} /> 
<a className="col-1 d-flex flex-row align-items-center justify-content-center" onClick={()=>setDisplay("d-none")}> < ImCross size={12} color="#ff944d"/></a>
</div>

{/* Rendering content */}
      <div className="d-flex flex-column" style={{ marginTop: "-10px" }}>
      {talkAstro.Astrodata.filter((result)=>{

        if(searchTerm==""){
          return result
        }else if( (result.name.toLowerCase().includes(searchTerm.toLowerCase()) ) || (result.languages.map((l)=> l.toLowerCase()).includes(searchTerm.toLowerCase()) )){
          return result
        }

      }).map((result)=>{
     return <CardComponent key={result.id} 
     name={result.name}
     experience={result.experience}
     languages={result.languages}
     price={result.price}
     skills={result.skills}
     imageUrl={result.imageUrl}/>
      })
        }
        
      </div>
    </div>
  );
}

export default Page2;
