import { useEffect, useContext } from "react";
import Online from "../online/Online";
import axios from "axios";
import "./rightbar.css";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    }
    getFriends();
  }, [user]);


  const HomeRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">My Links</h4>
        <ul className="rightbarFriendList">
          <li><a href="https://github.com/richardcollinsDkIT" target={"_blank"} ><img className="rightbarLinksLogo" src={PF + "github.png"}/>Github</a></li>
          <li><a href="https://www.youtube.com/channel/UCmHYuGPlIyiA1AQ8r9MSG5Q" target={"_blank"} ><img className="rightbarLinksLogo" src={PF + "youtube.png"}/>YouTube</a></li>
          <li><a href="https://steamcommunity.com/profiles/76561198212919411/" target={"_blank"} ><img className="rightbarLinksLogo" src={PF + "steam.png"}/>Steam</a></li>
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"></span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
