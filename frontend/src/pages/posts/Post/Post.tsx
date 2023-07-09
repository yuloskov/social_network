import { FC } from "react"
import { PostData } from "../service"

import "./Post.css"

interface PostProps {
  post: PostData;
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <p>{post.text}</p>
      <p>{post.author.name}</p>
    </div>
  )
}