import { PermMedia } from '@mui/icons-material';
import { useState, useRef } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./share.css";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        try {
            await axios.post("/posts", newPost)
        } catch (err) {

        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={user.profilePicture ? PF + user.profilePicture : PF + "person/default-profile-img.png"}
                        alt=""
                    />
                    <input
                        placeholder="Project Title"
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo</span>
                            <input style={{ display: "none" }} type="file" id="file" accept='.png,.jpg,.jpeg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                    </div>
                    <button className="shareButton" type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
