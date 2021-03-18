


import * as React from 'react'; 
import {useState} from "react";
import {colors} from "../styles/colors"
import {profiles} from "../TeamMemberProfiles/teamMemberProfiles"
import {TeamMemberProfile} from '../components/TeamMemberProfile'
export function TeamMemberProfileList() {

   

return (
  <div   style={{width:1000, alignSelf:'center', marginLeft:'auto', marginRight:'auto'}}>
{profiles.map((profile, i) => {
 return <TeamMemberProfile member={profile} index={i}/>
})}
</div>
)
}


     




