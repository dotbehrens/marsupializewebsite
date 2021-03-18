import * as React from 'react'; 
import {useState} from "react";
import {TextareaAutosize, Typography} from "@material-ui/core"
import {colors} from "../styles/colors"
import { Card, Paper } from '@material-ui/core';
import ckLogo from "C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/cklogo_2.png"
export function CKLogo() {
 
  return (

     

<div >

<img src={ckLogo} style={{height:280,marginTop: -50}}/>
    </div>


  
   
  );
}
