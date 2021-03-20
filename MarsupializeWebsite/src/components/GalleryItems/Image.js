import * as React from "react";
import { colors } from "../../styles/colors";
import CkDrawing from "../../Images/GallaryImages/ckdrawing.jpg"


export function Image (props) {

   

   
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
          backgroundColor:colors.ckGrey,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
            <img src={CkDrawing} alt="ckdrawing" style={{height:400, width: 'auto', borderRadius:8}}/>

  
            </div>
   </div>
      
     
    );
  }



