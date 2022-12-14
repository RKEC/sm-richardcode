import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import "./post.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        } catch (err) { }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={
                                    user.profilePicture ? PF + "person/" + user.profilePicture : PF + "person/default-profile-img.png"
                                }
                                alt=""
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <h3 className="postText">{post?.title}</h3>
                    <span className="postText">{post?.desc}</span>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className="likeIcon" htmlColor="#ff2e00" onClick={likeHandler} />
                        <ThumbUp className="likeIcon" htmlColor="#0093ff" onClick={likeHandler} />
                        <span className="postLikeCounter"> {like} people liked</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
