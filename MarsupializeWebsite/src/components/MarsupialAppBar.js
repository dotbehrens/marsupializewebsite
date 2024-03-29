import {AppBar, Toolbar,  Button} from '@material-ui/core';
import {colors} from "../styles/colors"
export function MarsupialAppBar (props) {

    return (
      <div className="App">
      <AppBar position="static" style={{backgroundColor: colors.ckOrange, alignContent:'right'}} >
    <Toolbar style={{alignContent:'right'}} >
      <Button color="inherit"  onClick={()=> props.setScreen('home')} style={{color:colors.ckNavyBlue, paddingRight:40, 'font-weight': 'bold' ,"font-family": 'Syne Mono',"font-size": 52, }}>Team Marsupialize</Button>
      <Button color="inherit"onClick={()=> props.setScreen('home')} style={{color:colors.ckOffWhite, marginLeft:'auto', "font-family": 'Gochi Hand',"font-size": 40,}}>HOME</Button>
      <Button color="inherit" onClick={()=> props.setScreen('team')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 40,}}>TEAM</Button>
 
      {/* <Button color="inherit" href='src\screens\Gallery.js' style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>GALLERY</Button> */}
   {/* <Button color="inherit" href='src\screens\Team.js' onClick={()=> props.setScreen('home')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 25,}}>FAQ</Button> */}
   <Button color="inherit" onClick={()=> props.setScreen('contact')} style={{color:colors.ckOffWhite, "font-family": 'Gochi Hand',"font-size": 40,}}>CONTACT</Button>
      <Button color="inherit"  style={{color:colors.ckOffWhite, 'font-weight': 'bold',marginRight:40,"font-family": 'Gochi Hand',"font-size": 52,}}><a style={{color:'white', textDecoration:'none'}} href='https://play.marsupialize.com/'>PLAY</a></Button>
    </Toolbar>
  </AppBar>
   
      </div>
    );
  }
