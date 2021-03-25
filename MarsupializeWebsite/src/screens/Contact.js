import {AppBar, Toolbar, IconButton, MenuIcon, Typography, Button} from '@material-ui/core';
import {colors} from "../styles/colors"
import {width} from "../App"



export function Contact (props) {

    return (
      <div className="App" style={{marginTop: 70}} >
          <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 30,  textAlign:"center", paddingBottom:20}}>We are always happy to hear from people about thier expirience with our game. </Typography>
          <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 30,  textAlign:"center"}}> Feedback is not only appreciated but it is needed for continual improvement. </Typography>
     <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 32, paddingTop:20,textAlign:"center"}}> If you would like to contact us, please email </Typography>
   <Typography style={{paddingTop:10,  textAlign:"center", }}><a  style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 22,}}href = "mailto: abc@example.com"><b> contact@marsupialize.com</b></a></Typography>
   <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 32, lineHeight:3,  textAlign:"center"}} >Thank You!</Typography>
   <Typography style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 28,textAlign:"center"}}>-The Marsupialites</Typography>
   <div style={{ height: 900}}></div>
      </div>
    );
  }
