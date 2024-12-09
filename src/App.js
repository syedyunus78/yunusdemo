import React, { useState } from "react"
import myImage from '../src/image/yunuspic1.png';
import myImagepic from "../src/image/phases_of_e_commerce_project_management_plan_slide01.jpg"
import Newlogo from "./Newlogo";
import Billinvoice from "./Billinvoice";
import { Button } from "bootstrap";
// For React (index.js)
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [openbill,Setbill] = useState(false)


  return (

    <div style={{height:"100%",width:"100%",color:"black"}} >
{/* <div >
<img src={myImage} alt="Description of the image" />
  <h1>hello syed</h1>

</div> */}
<div style={{backgroundColor:"black", color:"white", justifyContent:"center", textAlign:"center", padding:"2rem", }}>
<div style={{
  background: "linear-gradient(to right, #00c853, #b2ff59)", // Green gradient colors
  padding: "2px", // Adjust to control the border width
  borderRadius: "90%", // Ensures the background is circular
  display: "inline-block" // Keeps the container just around the image
}}>
  <img src={myImage} style={{ borderRadius: "93px", height: "190px" }} alt="Description of the image" />
</div>
  <h1> Syed yunus </h1>
  
  <h2 style={{color:"green" , display:"flex", textAlign:"center",justifyContent:"center"}}>Who am i ?</h2>
  <p>Software developer</p>
  <p>Frontend ReactJS Developer with a strong focus on building interactive and responsive web applications. Skilled in JavaScript, modern libraries, and frameworks like React and Redux. Passionate about clean code, user experience, and optimizing performance.</p>

</div>
<img  src={myImagepic} style={{width:"100%",height:"100%"}}/>

<br/>

<div  onClick={() => Setbill(true)} >invoice bill</ div>
{openbill ? (<Billinvoice show={openbill} onHide={() => Setbill(false)}/>) : ("")}



    </div>


  );
}

export default App;
