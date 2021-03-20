

import * as React from "react";
import { useState,  } from "react";
import { colors } from "../../styles/colors";
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
