import * as React from "react";

import { colors } from "../../styles/colors";
import ClayMountains from '../../Images/GallaryImages/clayMountains.png'

export function ClayMountainsImage (props) {

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
              <img src={ClayMountains} alt="clayMountains" style={{height:'auto', width: 700, borderRadius:8}}/>

  
            </div>
      </div>
    );
  }

