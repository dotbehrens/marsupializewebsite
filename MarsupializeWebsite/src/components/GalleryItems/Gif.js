

import * as React from "react";
import { useState,  } from "react";

import { colors } from "../../styles/colors";


export function Gif (props) {

    const [colorProfile, setColorProfile] = useState({
      background: colors.ckRedGrey,
      text: "",
    });
    const [viewState, setViewState] = useState("viewLess");
  

   
    return (
      <div
      
        justify='left'
        class='background'
        style={{
        
          marginTop: 15,
          marginBottom: 15,
        marginLeft:15,
        marginRight:15,
          backgroundColor:colors.ckOrange,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{padding:20 }}>

   <iframe src="//gifs.com/embed/WL53wo" frameborder="0" scrolling="no" width="332" height="262" ></iframe>
            </div>
   </div>
      
     
    );
  }



