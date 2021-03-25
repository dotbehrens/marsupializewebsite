import * as React from "react";
import { colors } from "../../styles/colors";
import HornyDevil from "../../Images/GallaryImages/claylizard2.jpg"

export function HornyDevilPost(props) {

    return (
      <div      
        justify='left'
        class='background'
        style={{
          marginTop: 15,
          marginBottom: 15,
          marginLeft:15,
          marginRight:15,
          backgroundColor:colors.ckPurple,
          borderRadius: 12,
          display: "inline-flex",
        }}>
            <div style={{paddingTop:20, padding:20 }}>
                <img src={HornyDevil} alt="ckdrawing" style={{height:400, width: 'auto', borderRadius:8}}/>
            </div>
      </div>
      
     
    );
  }



