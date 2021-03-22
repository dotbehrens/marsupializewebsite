import * as React from "react";
import { useState,useEffect } from "react";
import { Typography,  } from "@material-ui/core";
import { colors } from "../styles/colors";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TeamMemberProfile(props) {
  console.log("OurMembers", props.member);
  const [colorProfile, setColorProfile] = useState({
    background: colors.ckRedGrey,
    text: "",
  });
  const [viewState, setViewState] = useState("viewMore");

  useEffect(() => {
    if (props.index % 7 === 0) {
      setColorProfile({
        background: colors.ckPurple,
        text: colors.ckNavyBlue,
      })
    } else if (props.index % 5 === 0) {
      setColorProfile({
        background: colors.ckBlack,
        text: colors.ckOffWhite,
      })
      
    }
    else if (props.index % 2 === 0) {
      setColorProfile({
        background: colors.ckGrey,
        text: colors.ckNavyBlue,
      })}
      
    }, [props.index]);

  if (viewState === "viewMore") {
    return (
      <div>
      <div
        container
        direction='column'
        justify='left'
        class='background'
        style={{
          // height: 400,
          width: 900,
          paddingLeft: 50,
          paddingRight: 50,
          marginBottom: 50,
          backgroundColor: colorProfile.background,
          // marginLeft: 500,
          borderRadius: 12,
          display: "flex",
        }}>
        <div class='leftComponent' style={{ marginTop: 30 }}>
          <div
            class='teamMemberImageBackground'
            style={{
              backgroundColor: colors.ckNavyBlue,
              "border-color": colors.ckOrange,
              borderRadius: 12,
              height: 240,
              width: 240,
              alignItems: "center",
            }}>
            <div class='teamMemberImage' style={{ padding: 20 }}>
              {props.member.image}
            </div>
          </div>
          <div class='teamMemberFunFactContainer' style={{ width: 200 }}>
            <Typography
              class='teamMemberFunFact'
              style={{
                color: colorProfile.text,
                "font-family": "Gochi Hand",
                "font-size": 16,

                textAlign: "left",
              }}>{`Favorite Marsupial : ${props.member.favMarsupial}`}</Typography>
            <Typography
              class='teamMemberFunFact'
              style={{
                color: colorProfile.text,
                "font-family": "Gochi Hand",
                "font-size": 16,
                textAlign: "left",
              }}>{`Favorite Game : ${props.member.favGame}`}</Typography>
          </div>
{/* 
          <Typography
            style={{
              width: 200,
              color: colors.ckOffWhite,
              "font-family": "Syne Mono",
              "font-size": 16,
              borderRadius: 12,
              backgroundColor: colors.ckNavyBlue,
              marginLeft: 20,
            }}>{`${props.member.name_First}'s Posts`}</Typography> */}
        </div>

        <div class='rightComponent' style={{ float: "right", marginLeft: 50 }}>
          <div class='TeamMemberTitlesContainer' style={{}}>
            <Typography
              class='teamMemeberName'
              style={{
                color: colorProfile.text,
                "font-family": "Syne Mono",
                "font-size": 21,
                textAlign: "left",
                fontWeight: "bold",
              }}>
              {props.member.name_Full}
            </Typography>
            <Typography
              class='teamMemberRole'
              style={{
                color: colorProfile.text,
                "font-family": "Syne Mono",
                "font-size": 16,
                textAlign: "left",
                fontWeight: "bold",
              }}>
              {props.member.role}
            </Typography>
          </div>
          <div class='teamMemberBioContainer' style={{ width: 450 }}>
            <Typography
              class='teamMemberBio'
              style={{
                color: colorProfile.text,
                "font-family": "Syne Mono",
                "font-size": 20,
                textAlign: "left",
              }}>
              {props.member.bio}
            </Typography>
          </div>
          <div class='rightComponentBottomRow'>
            {/* <div class='socialMediaContainer'>
              <div class='socialMediaIcon'></div>
              <div class='socialMediaIcon'></div>
            </div> */}
            {/* <div
              class='viewLess'
              onClick={() => setViewState("viewLess")}
              style={{
                color: colors.ckOffWhite,
                "font-family": "Syne Mono",
                "font-size": 16,
                float: "right",
              }}>
              View Less
            </div> */}
          </div>
        </div>
      </div>
      </div>
    );
  } else {
    return (
      <div
        container
        direction='column'
        justify='left'
        class='background'
        style={{
          height: 300,
          width: 800,
          paddingLeft: 50,
          paddingRight: 50,
          marginBottom: 50,
          backgroundColor: colorProfile.background,
          // marginLeft: 500,
          borderRadius: 12,
          display: "inline-flex",
        }}>
        <div class='leftComponent' style={{ marginTop: 30 }}>
          <div
            class='teamMemberImageBackground'
            style={{
              backgroundColor: colors.ckNavyBlue,
              border: 7,
              borderColor: colors.ckOrange,
              borderRadius: 12,
              height: 240,
              width: 240,
            }}>
            <div class='teamMemberImage' style={{ padding: 20, borderRadius:12 }}>
              {props.member.image}
            </div>
          </div>
        </div>

        <div class='rightComponent' style={{ float: "right", marginLeft: 50 }}>
          <div class='TeamMemberTitlesContainer' style={{}}>
            <Typography
              class='teamMemeberName'
              style={{
                color: colors.ckOffWhite,
                "font-family": "Syne Mono",
                "font-size": 21,
                textAlign: "left",
                fontWeight: "bold",
              }}>
              {props.member.name_Full}
            </Typography>
            <Typography
              class='teamMemberRole'
              style={{
                color: colors.ckOffWhite,
                "font-family": "Syne Mono",
                "font-size": 15,
                textAlign: "left",
                fontWeight: "bold",
                lineHeight:0
                
              }}>
              {props.member.role}
            </Typography>
          </div>
          <div
            class='teamMemberBioContainer'
            style={{ width: 450, float: "bottom" }}>
            <Typography
              class='teamMemberBio'
              style={{
                color: colors.ckOffWhite,
                "font-family": "Syne Mono",
                "font-size": 18,
                textAlign: "left",
                paddingBottom:20
              }}>
              {props.member.bio.slice(0, 150).concat("...")}
            </Typography>
          </div>
          <div class='rightComponentBottomRow'>
            {/* <div class='socialMediaContainer'>
              <div class='socialMediaIcon'></div>
              <div class='socialMediaIcon'>
                <FontAwesomeIcon icon={["fal", "linkedin-in"]} />
                <i class='fal fa-linkedin-in'></i>
              </div>
            </div> */}

            <div
              class='viewMore'
              onClick={() => setViewState("viewMore")}
              style={{
                color: colors.ckOffWhite,
                "font-family": "Syne Mono",
                "font-size": 16,
                float: "right",
               
              }}>
              View More
            </div>
          </div>
        </div>
      </div>
    );
  }
}
