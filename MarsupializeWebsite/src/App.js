
import './App.css';
import {MarsupialAppBar} from "../src/components/MarsupialAppBar"
import * as React from 'react';
import { useState, } from "react";

import {colors} from "../src/styles/colors"


import {LetterHead} from "./components/LetterHead"
import { MarsupialFooterBar } from './components/MarsupialFooterBar';
import {Home} from '../src/screens/Home'
import {Team} from '../src/screens/Team'
import {Contact} from '../src/screens/Contact'
import {PlayScreen} from './screens/Play'
export const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

export const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
function App() {
  const [screen, setScreen] = useState('home');

  if(screen === 'team'){
    return (
      <div className="App" style={{backgroundColor: colors.ckNavyBlue}}>
      <MarsupialAppBar setScreen={()=>setScreen()}/>

<Team/>
<MarsupialFooterBar setScreen={()=>setScreen()}/>
    </div>
    )
  } else if(screen === 'contact'){
    return (
     
        <div className="App" style={{backgroundColor: colors.ckNavyBlue, alignItems:'center', 'justify-content': 'center', marginLeft:'auto',marginRight:'auto'}}>
        <MarsupialAppBar setScreen={setScreen}/>
  <LetterHead/>
  <Contact/>
  
  <MarsupialFooterBar setScreen={setScreen}/>
      </div>
    )
  }else if(screen === 'play'){
    return (
     
        <div className="App" style={{backgroundColor: colors.ckNavyBlue, alignItems:'center', 'justify-content': 'center', marginLeft:'auto',marginRight:'auto'}}>
        <MarsupialAppBar setScreen={setScreen}/>
  <LetterHead/>
  <PlayScreen/>
  
  <MarsupialFooterBar setScreen={setScreen}/>
      </div>
    )
  }

   else {

    return (
      <div className="App" style={{backgroundColor: colors.ckNavyBlue}}>
      <MarsupialAppBar setScreen={setScreen}/>
<LetterHead/>
<div style={{alignItems:'center', 'justify-content': 'center', marginLeft:'auto',marginRight:'auto'}}>

<Home/>

</div>
<MarsupialFooterBar setScreen={setScreen}/>
    </div>
  );
}
}

export default App;
