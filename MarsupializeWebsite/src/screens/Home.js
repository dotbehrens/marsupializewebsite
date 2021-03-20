import { Typography, } from '@material-ui/core';
// const ckVideo = 'C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/video0.mov'
import {Gif} from '../components/GalleryItems/Gif'

import {Image} from '../components/GalleryItems/Image'
import {CKEarlyRenderImage} from '../components/GalleryItems/CKEarlyRender'
import {CKRenderingImage} from '../components/GalleryItems/CKRendering'
import {CactiImage} from '../components/GalleryItems/Cacti'
import {CactusFlowerImage} from '../components/GalleryItems/CactusFlower'
import {CKBonkImage} from '../components/GalleryItems/CKBonk'
export function Home () {
    return (


   <div className="">
  
    <Typography style={{marginLeft:'auto', marginRight:'auto', color:'white', height:300, width:800, 'font-size': 20}}>Quisque varius arcu quis leo mattis lobortis. Integer finibus velit est, quis semper ante ele </Typography>
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
   <CKEarlyRenderImage/>
  <Image/>

   </div>
   <div style={{height:200}}>

   </div>
      </div>
    );
  }
