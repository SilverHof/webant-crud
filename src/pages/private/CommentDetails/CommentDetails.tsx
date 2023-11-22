import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../../../api/setup";

interface CommentDetailsProps {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

export const CommentDetails = () => {
   const { commentId } = useParams();
   const [data, setData] = useState<CommentDetailsProps>();
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      commentId &&
         getComment(commentId)
            .then((result) => {
               setData(result?.data);
               setIsLoading(false);
            })
            .catch((error) => {
               console.log(error);
            });
   }, [commentId]);

   return (
      <div className="comment-item">
         {isLoading === false && <div className="">{data?.name}</div>}
      </div>
   );
};
