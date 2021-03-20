import * as React from 'react'; 
import David from "../../Images/DavidBrookscropped.jpg"
export function DavidImage() {
 
  return (
<div >

<img src={David} alt="David" style={{height:200, width: 200, borderRadius:8}}/>
    </div>
  );
}
