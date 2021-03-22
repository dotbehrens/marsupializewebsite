

import * as React from "react";
import { useState,  } from "react";

import { colors } from "../../styles/colors";


import CKEarlyRender from "../../Images/GallaryImages/CKEarlyRender.png"


export function CKEarlyRenderImage (props) {

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
        //   height: 310,
        //   width:300,
        //   paddingLeft: 20,
          marginTop: 15,
          marginBottom: 15,
        marginLeft:15,
        marginRight:15,
          backgroundColor:colors.ckPurple,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
            <img src={CKEarlyRender} alt="ckdrawing" style={{height:400, width: 'auto', borderRadius:8}}/>

  
            </div>
   </div>
      
     
    );
  }



