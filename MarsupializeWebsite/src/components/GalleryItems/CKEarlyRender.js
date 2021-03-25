import * as React from "react";

import { colors } from "../../styles/colors";
import CKEarlyRender from "../../Images/GallaryImages/CKEarlyRender.png";

export function CKEarlyRenderImage ( props ) {
  return (
    <div
      justify='left'
      class='background'
      style={ {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.ckOrange,
        borderRadius: 12,
        display: "inline-flex",
      } }>
      <div style={ { paddingTop: 20, padding: 20 } }>
        <img src={ CKEarlyRender } alt="ckdrawing" style={ { height: 400, width: 'auto', borderRadius: 8 } } />
      </div>
    </div>
  );
}



