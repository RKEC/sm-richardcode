import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";


export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/porfile/" + username)
        : await axios.get("posts/timeline/");
      setPosts(res.data);
    }
    fetchPosts();
  }, [username])


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          <Post key={p._id} post={p} />
        })}
      </div>
    </div>
  )
}
