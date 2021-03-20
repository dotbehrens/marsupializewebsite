import { Typography } from "@material-ui/core";

import { TeamMemberProfileList } from '../components/TeamMemberProfileList';
export function Team () {
    return (
      <div className="App">

   <div className="TeamMemberProfile">
    
   <Typography style={{marginLeft:'auto', marginRight:'auto', color:'white', height:300, width:800, 'font-size': 20}}>Quisque varius arcu quis leo mattis lobortis. Integer finibus velit est, quis semper ante ele </Typography>
   
<TeamMemberProfileList/>
<div style={{ height: 500}}></div>
      </div>
   </div>
     
    );
  }
