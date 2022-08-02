import "./sidebar.css"
import { RssFeed, FolderOpen, Logout, Info } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FolderOpen className="sidebarIcon" />
            <span className="sidebarListItemText">My projects</span>
          </li>
          <li className="sidebarListItem">
            <Info className="sidebarIcon" />
            <span className="sidebarListItemText">About</span>
          </li>
          <li className="sidebarListItem">
            <Logout className="sidebarIcon" />
            <span className="sidebarListItemText">Log out</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/skull.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName"> Richard Collins</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
