import * as React from "react";

import { colors } from "../../styles/colors";
import Cacti from '../../Images/GallaryImages/cacti.jpg'

export function CactiImage (props) {

    return (
      <div
        justify='left'
        class='background'
        style={{
          marginTop: 15,
          marginBottom: 15,
          marginLeft:15,
          marginRight:15,
          backgroundColor:colors.ckBlack,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
              <img src={Cacti} alt="cacti" style={{height:'auto', width: 350, borderRadius:8}}/>

  
            </div>
      </div>
    );
  }



