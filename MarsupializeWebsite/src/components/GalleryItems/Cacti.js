

import * as React from "react";
import { useState, useEffect } from "react";
import { TextareaAutosize, Typography, Grid } from "@material-ui/core";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CkVideo} from '../GalleryItems/CkVideo'


import Cacti from '../../Images/GallaryImages/cacti.jpg'


export function CactiImage (props) {

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
          backgroundColor:colors.ckBlack,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
            <img src={Cacti} alt="ckdrawing" style={{height:'auto', width: 350, borderRadius:8}}/>

  
            </div>
   </div>
      
     
    );
  }



