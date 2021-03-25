import * as React from "react";
import { colors } from "../../styles/colors";
import PaintedLizard from "../../Images/GallaryImages/paintedLizard.jpg"


export function PaintedLizardImage (props) {

   

   
    return (
      <div
      
        justify='left'
        class='background'
        style={{
          marginTop: 15,
          marginBottom: 15,
            marginLeft:15,
            marginRight:15,
          backgroundColor:colors.ckGrey,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
            <img src={PaintedLizard} alt="ckdrawing" style={{height:400, width: 'auto', borderRadius:8}}/>

  
            </div>
   </div>
      
     
    );
  }



