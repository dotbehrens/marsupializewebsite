import * as React from 'react'; 
import Dot from "../../Images/dotcropped.jpg"

export function DotImage() {
 
  return (
<div >

<img src={Dot} alt="Dot" style={{height:200, width: 200, borderRadius:8}}/>
    </div>
  );
}
