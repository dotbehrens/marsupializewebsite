import {AppBar, Toolbar, IconButton, MenuIcon, Typography, Button} from '@material-ui/core';
import {colors} from "../styles/colors"
export function MarsupialFooterBar (props) {

    return (
    
      <AppBar position="static" style={{backgroundColor: colors.ckOrange}}>
    <Toolbar>
    
    <Button color="inherit"  onClick={()=> props.setScreen('home')} style={{color:colors.ckNavyBlue, paddingRight:40, 'font-weight': 'bold' ,"font-family": 'Syne Mono',"font-size": 52, }}>Team Marsupialize</Button>
    <Button color="inherit" onClick={()=> props.setScreen('play')}
    // style={{color:colors.ckOffWhite, marginLeft:'auto', "font-family": 'Gochi Hand',"font-size": 45,}}
    style={{color:colors.ckOffWhite, marginLeft: 'auto', 'font-weight': 'bold',marginRight:40,"font-family": 'Gochi Hand',"font-size": 52,}}
    >PLAY</Button>

    </Toolbar>
  </AppBar>
   
     
    );
  }
