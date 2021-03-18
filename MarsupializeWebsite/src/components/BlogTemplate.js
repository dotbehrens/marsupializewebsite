


import * as React from 'react'; 
import {useState} from "react";
import {TextareaAutosize, Typography} from "@material-ui/core"
import {colors} from "../styles/colors"
import { Card, Paper } from '@material-ui/core';

export function TeamMemberProfile() {
    const [colorProfile, setColorProfile] = useState({
        background: "",
        text : ""
    })
  return (

     

<div style={{height:500, width:900,paddingLeft:400,paddingTop: 50}}>


    <div className="image" style={{flexDirection:"row", display:"flex",backgroundColor:"#b49fca", width:700, height:400, paddingLeft:25 }}>
      <div style={{height: 290, width:300, backgroundColor:"#Do6348", alignContent:"center", }}>

   
      </div>
    <div className="biography" style={{marginTop:25, textAlign:"left"}}>
     <b >PM/Programmer/3D Scanning Tech/3D Animator</b>
     <div style={{height: 400, width:400}}>

    <p style={{  color: "blue", textAlign: "left"}}>I am the Project's Team Lead, a programmer, 3D Scan Engineer and 3D animator on the project. I earned my BS in CS from UNO in 2019. I have been an IT professional since 2002 an have worn a lot of different hats since then. I am an avid gamer, Linux and FOSS enthusiast. </p>
     </div>
    
    </div>
    </div>

</div>
  
   
  );
}

