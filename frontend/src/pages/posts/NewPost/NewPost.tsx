import { FC, useCallback, useState } from "react";
import { PostData, newPost } from "../service";
import "./NewPost.css";

interface NewPostProps {
  addPost: (post: PostData) => void;
}

export const NewPost: FC<NewPostProps> = ({ addPost }) => {
  const [text, setText] = useState<string>("");

  const onPublish = useCallback(() => {
    newPost(text)
      .then((post) => addPost(post))
      .catch((err) => console.log(err));
  }, [addPost, text]);

  return (
    <div className="new-post">
      <textarea
        placeholder="Напишите анекдот..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="new-post__button" onClick={onPublish}>
        <button>Опубликовать</button>
      </div>
    </div>
  );
};
