import React from "react"
import myImage from '../src/image/yunuspic1.png';
import myImagepic from "../src/image/phases_of_e_commerce_project_management_plan_slide01.jpg"
function App() {




  return (

    <div style={{backgroundColor:"red",height:"100%",width:"100%",color:"black"}} >
{/* <div >
<img src={myImage} alt="Description of the image" />
  <h1>hello syed</h1>

</div> */}
<div style={{backgroundColor:"black", color:"white", justifyContent:"center", textAlign:"center", padding:"2rem", }}>
<img src={myImage} style={{borderRadius:"90px",height:"180px"}} alt="Description of the image"  />
  <h1> Syed yunus </h1>
  <p>Software developer</p>
  <h2 style={{color:"green"}}>Who am i ?</h2>
  <p>Frontend ReactJS Developer with a strong focus on building interactive and responsive web applications. Skilled in JavaScript, modern libraries, and frameworks like React and Redux. Passionate about clean code, user experience, and optimizing performance.</p>

</div>
<img  src={myImagepic} style={{width:"100%",height:"100%"}}/>
    </div>


  );
}

export default App;
