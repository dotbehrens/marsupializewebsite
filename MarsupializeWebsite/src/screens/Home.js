import { Typography, } from '@material-ui/core';
import {Gif} from '../components/GalleryItems/Gif';
import {Player} from '../components/GalleryItems/AudioPlayer1';
import {Image} from '../components/GalleryItems/Image';
import {CKEarlyRenderImage} from '../components/GalleryItems/CKEarlyRender';
import {CKRenderingImage} from '../components/GalleryItems/CKRendering';
import {CactiImage} from '../components/GalleryItems/Cacti';
import {CactusFlowerImage} from '../components/GalleryItems/CactusFlower';
import {CKBonkImage} from '../components/GalleryItems/CKBonk';
import {colors} from '../styles/colors';
import {Player2} from '../components/GalleryItems/AudioPlayer2'
import {HornyDevilPost} from '../components/GalleryItems/HornyDevil'
import {CKRenderedImage} from '../components/GalleryItems/CKRenderedFront'
import {CKRenderedBackImage} from '../components/GalleryItems/CKRendredBack'
import {CKNAkedImage} from '../components/GalleryItems/CKNaked'
import {PaintedLizardImage} from '../components/GalleryItems/PaintedLizard'
import { ClayMountainsImage} from '../components/GalleryItems/ClayMountains'
export function Home () {
    return (


   <div className="">
  
    <Typography style={{marginTop: 150, marginLeft:'auto', marginRight:'auto', color:colors.ckGrey, height:300, width:1000, 'font-size': 30, "font-family": "Syne Mono",}}>Welcome! We are Team Marsupialize, a game developement team from the Greater New Orleans area, hellbent on bringing you games littered with adorable pocketed friends. </Typography>
   <div>
   <Gif/>
   <CKRenderingImage/>

   </div>
   <div>
  
   <Player/>
   

   </div>
   <div>
     <CactiImage/>
     <CactusFlowerImage/>
  <CKBonkImage/>
   </div>
   <div>
  
   <Player2/>

   </div>
   <div>
  <Image/>
   <CKEarlyRenderImage/>
  <CKNAkedImage/>
<CKRenderedImage/>
<CKRenderedBackImage/>

   </div>
   <div>
  <HornyDevilPost/>
  <PaintedLizardImage/>
  <ClayMountainsImage/>
   </div>
   <div style={{height:200}}>

   </div>
      </div>
    );
  }
