import {AppBar, Toolbar, IconButton, MenuIcon, Typography, Button} from '@material-ui/core';
import {colors} from "../styles/colors"
export function MarsupialFooterBar () {

    return (
    
      <AppBar position="static" style={{backgroundColor: colors.ckOrange}}>
    <Toolbar>
    
      <Button color="inherit" href='src\screens\Home.js'style={{color:colors.ckGrey, "font-family": 'Syne Mono',"font-size": 25, }} >Team Marsupialize</Button>
      <Button color="inherit" href='src\screens\Team.js' style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 32,}}>Play</Button>

    </Toolbar>
  </AppBar>
   
     
    );
  }
