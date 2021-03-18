

import * as React from "react";
import { useState, useEffect } from "react";
import { TextareaAutosize, Typography, Grid } from "@material-ui/core";
import { colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CkVideo} from '../GalleryItems/CkVideo'
export function Video (props) {
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
      <div
        container
        direction='column'
        justify='left'
        class='background'
        style={{
          height: 300,
          width: 800,
          paddingLeft: 50,
          paddingRight: 50,
          marginBottom: 50,
        //   backgroundColor: colorProfile.background,
          borderRadius: 12,
          display: "inline-flex",
        }}>
<CkVideo/>
      </div>
    );
  }



