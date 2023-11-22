import { useState } from "react";
import "./HomePage.scss";
import { CommentItem } from "./components/CommentItem/CommentItem";
import { getComments, postComment, putComment } from "../../../api/setup";
import { Button } from "../../../components/Button/Button";

interface CommentsProps {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

interface FormProps {
   postId: number | null;
   id: number | null;
   name: string;
   email: string;
   body: string;
}

export const HomePage = () => {
   const [data, setData] = useState<CommentsProps[]>([]);

   const [formData, setForm] = useState<FormProps>({
      postId: null,
      id: null,
      name: "",
      email: "",
      body: "",
   });

   const handleGetCollection = () => {
      getComments()
         .then((result) => {
            setData(result?.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handlePut = () => {
      putComment()
         .then((result) => {
            console.log(result);
            alert("Successfully created new comment");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handlePost = () => {
      postComment(formData)
         .then((result) => {
            console.log(result);
            alert("Successfully created new comment");
         })
         .catch((error) => {
            console.log(error);
         });
   };


   return (
      <section className="home-page">
         <div className="home-page__container container">
            <div className="home-page__inner">
               <div className="home-page__buttons">
                  <Button
                     text="Get Collection"
                     onClick={handleGetCollection}
                  />
                  <Button
                     text="PUT"
                     onClick={handlePut}
                  />
               </div>
               <form className="home-page__post-form">
                  <input
                     type="text"
                     className="home-page__post-form-input"
                     placeholder="postId (number)"
                     onChange={(event) =>
                        setForm({
                           ...formData,
                           postId: parseInt(event.target.value),
                        })
                     }
                  />
                  <input
                     type="text"
                     className="home-page__post-form-input"
                     placeholder="id (number)"
                     onChange={(event) =>
                        setForm({
                           ...formData,
                           id: parseInt(event.target.value),
                        })
                     }
                  />
                  <input
                     type="text"
                     className="home-page__post-form-input"
                     placeholder="name (text)"
                     onChange={(event) =>
                        setForm({ ...formData, name: event.target.value })
                     }
                  />
                  <input
                     type="text"
                     className="home-page__post-form-input"
                     placeholder="email (text)"
                     onChange={(event) =>
                        setForm({ ...formData, email: event.target.value })
                     }
                  />
                  <input
                     type="text"
                     className="home-page__post-form-input"
                     placeholder="body (text)"
                     onChange={(event) =>
                        setForm({ ...formData, body: event.target.value })
                     }
                  />
                  <Button
                     text="POST"
                     onClick={handlePost}
                  />
               </form>
               <div className="home-page__comments">
                  {data?.map((item, index: number) => (
                     <CommentItem
                        {...item}
                        to={`/comments/${item.id}`}
                        key={index}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};
