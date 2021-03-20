import * as React from 'react'; 
import Andy from "../../Images/AndyCropped2.jpg"

export function AndyImage() {
 
  return (
<div >

<img src={Andy} alt="Andy" style={{height:200, width: 200, borderRadius:8}}/>
    </div>
  );
}
