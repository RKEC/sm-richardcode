import { PermMedia } from '@mui/icons-material';
import { useContext, useState, useRef } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./share.css";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const title = useRef();
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            title: title.current.value,
            desc: desc.current.value
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={user.profilePicture ? PF + "person/" + user.profilePicture : PF + "person/default-profile-img.png"}
                        alt=""
                    />
                    <input
                        placeholder="Project Title"
                        className="shareInput"
                        ref={title}
                    />
                </div>
                <input
                        placeholder="Project Description"
                        className="shareInput"
                        ref={desc}
                    />
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
