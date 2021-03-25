import AudioPlayer from 'react-h5-audio-player';
import DesertBoss from '../GalleryItems/Sounds/bossfasterdesert.mp3'

import 'react-h5-audio-player/lib/styles.css';
import {colors} from '../../styles/colors'
import { Typography } from '@material-ui/core';
export const Player2 = () => (
  <div style={{width:440, height: 140, backgroundColor:colors.ckRedGrey,marginLeft:'auto', marginRight:'auto', borderRadius:  8, alignItems:'center' }}>
  <div style={{width:400, height: 130, marginLeft:'auto', marginRight:'auto', backgroundColor:colors.ckRedGrey }}>


<Typography   
style={{color: colors.ckNavyBlue,
                "font-family": "Gochi Hand",
                "font-size": 22,
                textAlign: "center",
              }}>Desert Boss</Typography>
  <AudioPlayer
  style={{ backgroundColor:colors.ckBlack, borderRadius:  8, }}
  
  autoPlay={false}
  src={DesertBoss}
  
  // other props here
  />
  </div>
  
  </div>
);