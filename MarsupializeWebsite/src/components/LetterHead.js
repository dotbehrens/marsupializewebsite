

import * as React from 'react';
import {TextareaAutosize, Typography} from "@material-ui/core"
import {colors} from "../styles/colors"
import {CKLogo} from "./CkLogo"
export function LetterHead() {
  return (
    <div className="LetterHead" style={{height:'auto', marginTop:100}} >
      <div style={{color:colors.ckGrey, "font-family": 'Syne Mono', "font-size": 60, textAlign:"center", }}> Team Marsupialize</div>
      <CKLogo style={{marginTop: -80, height:800, }} />
      <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 40, marginTop: -30, textAlign:"center"}}> Marsupials are the future!</Typography>


    </div>
  );
}

