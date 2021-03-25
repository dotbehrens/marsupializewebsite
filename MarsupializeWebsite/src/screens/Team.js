import { Typography } from "@material-ui/core";
import {colors} from '../styles/colors'
import { TeamMemberProfileList } from '../components/TeamMemberProfileList';
import {CKLogo} from '../components/CkLogo'
export function Team () {
    return (
      <div className="App">

   <div className="TeamMemberProfile" style={{marginTop:70}}>
    <CKLogo/>
   <Typography style={{ marginTop: 50, marginLeft:'auto', marginRight:'auto', color:colors.ckOffWhite, height:300, width:1000, 'font-size': 25,  "font-family": "Syne Mono",}}>We are team formed by the power of friendship and Microsoft Games Camp. We have a vast array of backgrounds and talents. We are very proud of the work our team has put forward so far and excited to see what will be created in the future.</Typography>
<TeamMemberProfileList />
<div style={{ height: 500}}></div>
      </div>
   </div>
     
    );
  }
