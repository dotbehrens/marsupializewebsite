import * as React from 'react'; 
import Mark from "../../Images/markE.jpg"

export function MarkImage() {
 
  return (
<div >

<img src={Mark} alt="Dot" style={{height:200, width: 200, borderRadius:8}}/>
    </div>
  );
}
