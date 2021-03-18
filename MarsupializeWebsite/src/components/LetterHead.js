

import * as React from 'react';
import {TextareaAutosize, Typography} from "@material-ui/core"
import {colors} from "../styles/colors"
import {CKLogo} from "./CkLogo"
export function LetterHead() {
  return (
    <div className="LetterHead" style={{height:500, marginTop:100}} >
      <div style={{color:colors.ckGrey, "font-family": 'Syne Mono', "font-size": 37, textAlign:"center", }}> Team Marsupialize</div>
      <CKLogo style={{marginTop: -80}} />
      <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 18, marginTop: -30, textAlign:"center"}}> Marsupials are the future!</Typography>


    </div>
  );
}

