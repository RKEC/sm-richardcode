import "./topbar.css";
import { Search, Person, Notifications } from "@mui/icons-material"

export default function Home() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"><img src="/assets/richardcode.svg" alt="logo" /></span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search Projects" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>
                <img src="/assets/person/skull.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}