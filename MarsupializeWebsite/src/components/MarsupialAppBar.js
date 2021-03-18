import {AppBar, Toolbar, IconButton, MenuIcon, Typography, Button} from '@material-ui/core';
import {colors} from "../styles/colors"
export function MarsupialAppBar (props) {

    return (
      <div className="App">
      <AppBar position="static" style={{backgroundColor: colors.ckOrange}} >
    <Toolbar >
      <Button color="inherit"  onClick={()=> props.setScreen('home')} style={{color:colors.ckNavyBlue, paddingRight:40, 'font-weight': 'bold' ,"font-family": 'Syne Mono',"font-size": 38, }}>Team Marsupialize</Button>
      <Button color="inherit"onClick={()=> props.setScreen('home')} style={{color:colors.ckOffWhite,  "font-family": 'Gochi Hand',"font-size": 25,}}>HOME</Button>
      <Button color="inherit" onClick={()=> props.setScreen('team')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>TEAM</Button>
 
      {/* <Button color="inherit" href='src\screens\Gallery.js' style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>GALLERY</Button> */}
   {/* <Button color="inherit" href='src\screens\Team.js' onClick={()=> props.setScreen('home')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>FAQ</Button> */}
   <Button color="inherit" onClick={()=> props.setScreen('contact')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>CONTACT</Button>
      <Button color="inherit" onClick={()=> props.setScreen('play')} style={{color:colors.ckOffWhite, 'font-weight': 'bold',"font-family": 'Gochi Hand',"font-size": 32,}}>PLAY</Button>
    </Toolbar>
  </AppBar>
   
      </div>
    );
  }
