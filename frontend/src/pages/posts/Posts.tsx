import { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout/MainLayout";
import { PostData, getPosts } from "./service";
import { Post } from "./Post/Post";

import "./Posts.css";
import { NewPost } from "./NewPost/NewPost";

export const Posts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPosts()
      .then((data: PostData[]) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const addPost = (post: PostData) => {
    setPosts([post, ...posts]);
  };

  return (
    <MainLayout title="Посты">
      <h1>Посты</h1>

      <div className="posts">
        <NewPost addPost={addPost}/>

        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </MainLayout>
  );
};
