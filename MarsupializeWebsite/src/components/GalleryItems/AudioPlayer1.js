import AudioPlayer from 'react-h5-audio-player';
import ImpendingSomething from '../GalleryItems/Sounds/impendingSomething.mp3'
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import {colors} from '../../styles/colors'
import { Typography } from '@material-ui/core';
export const Player = () => (
  <div style={{width:440, height: 140, backgroundColor:colors.ckPurple,marginLeft:'auto', marginRight:'auto', borderRadius:  8, alignItems:'center' }}>
  <div style={{width:400, height: 130, marginLeft:'auto', marginRight:'auto', backgroundColor:colors.ckPurple }}>


<Typography   
style={{color: colors.ckNavyBlue,
                "font-family": "Gochi Hand",
                "font-size": 22,
                textAlign: "center",
              }}>Impending Something</Typography>
  <AudioPlayer
  style={{ backgroundColor:colors.ckBlack, borderRadius:  8, }}
  
  autoPlay={false}
  src={ImpendingSomething}
 
  // other props here
  />
  </div>
  
  </div>
);