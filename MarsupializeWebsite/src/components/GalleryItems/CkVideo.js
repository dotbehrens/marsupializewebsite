import * as React from "react";
import { useState, useEffect} from "react";
import {  Typography,} from "@material-ui/core";
import { colors } from "../../styles/colors";

import ckVideo from 'C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/video0.mov';
// const ckVideo = 'C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/video0.mov'
export function CkVideo(props) {

  const [colorProfile, setColorProfile] = useState({
    background: colors.ckRedGrey,
    text: "",
  });
  const [viewState, setViewState] = useState("viewLess");

  useEffect(() => {
    if (props.index % 7 === 0) {
      setColorProfile({
        background: colors.ckPurple,
        text: colors.ckNavyBlue,
      });
    } else if (props.index % 5 === 0) {
      setColorProfile({
        background: colors.ckBlack,
        text: colors.ckNavyBlue,
      });
      
    }
    else if (props.index % 2 === 0) {
      setColorProfile({
        background: colors.ckGrey,
        text: colors.ckNavyBlue,
      });
      
    }
  });

    return (
      <div>
        {ckVideo}
      </div>
    );
  
}
