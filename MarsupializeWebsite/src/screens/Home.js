import { Typography, } from '@material-ui/core';
// const ckVideo = 'C:/Users/dotbe/marsupializewebsite/MarsupializeWebsite/src/Images/video0.mov'
import {Gif} from '../components/GalleryItems/Gif'
import {Video} from '../components/GalleryItems/Video'
import {Image} from '../components/GalleryItems/Image'
export function Home () {
    return (


   <div className="">
  
    <Typography style={{marginLeft:'auto', marginRight:'auto', color:'white', height:300, width:800, 'font-size': 20}}>Quisque varius arcu quis leo mattis lobortis. Integer finibus velit est, quis semper ante ele </Typography>
   
  <Image/>
   <Gif/>
   <div style={{height:200}}>

   </div>
      </div>
    );
  }
