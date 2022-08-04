import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/skull.jpg" alt="" />
                        <span className="postUsername">Richard Collins</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">DAS - Door Alarm System</span>
                    <img src="assets/ard.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className="likeIcon"/>
                        <ThumbUp className="likeIcon"/>
                        <span className="postLikeCounter"> 1,000 people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
