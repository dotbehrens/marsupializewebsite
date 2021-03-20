

import * as React from "react";
import { useState, useEffect } from "react";
import { TextareaAutosize, Typography, Grid } from "@material-ui/core";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CkVideo} from '../GalleryItems/CkVideo'

import CKBonk from '../../Images/GallaryImages/ckbonk.jpg'


export function CKBonkImage (props) {

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
          backgroundColor:colors.ckOrange,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
            <img src={CKBonk} alt="ckdrawing" style={{height:600, width: 'auto', borderRadius:8}}/>

  
            </div>
   </div>
      
     
    );
  }
