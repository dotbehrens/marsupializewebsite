import { Typography, } from '@material-ui/core';
// const ckVideo = 'C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/video0.mov'
import {Gif} from '../components/GalleryItems/Gif'
import {Player} from '../components/GalleryItems/AudioPlayer1'
import {Image} from '../components/GalleryItems/Image'
import {CKEarlyRenderImage} from '../components/GalleryItems/CKEarlyRender'
import {CKRenderingImage} from '../components/GalleryItems/CKRendering'
import {CactiImage} from '../components/GalleryItems/Cacti'
import {CactusFlowerImage} from '../components/GalleryItems/CactusFlower'
import {CKBonkImage} from '../components/GalleryItems/CKBonk'
import {colors} from '../styles/colors';
export function Home () {
    return (


   <div className="">
  
    <Typography style={{marginTop: 150, marginLeft:'auto', marginRight:'auto', color:colors.ckGrey, height:300, width:1000, 'font-size': 30, "font-family": "Syne Mono",}}>Welcome! We are Team Marsupialize, a game developement team from the Greater New Orleans area, hellbent on bringing you games littered with adorable pocketed friends. </Typography>
   <div>
   <Gif/>
   <CKRenderingImage/>

   </div>
   <div>
     <CactiImage/>
     <CactusFlowerImage/>
  <CKBonkImage/>
   </div>
   <div>
   <Player/>

   </div>
   <div>
   <CKEarlyRenderImage/>
  <Image/>

   </div>
   <div style={{height:200}}>

   </div>
      </div>
    );
  }
