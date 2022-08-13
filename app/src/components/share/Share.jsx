import "./share.css";
import {PermMedia} from '@mui/icons-material'

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={PF+user.profilePicture} alt="" />
                    <input
                    placeholder="Project Title" 
                    className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
