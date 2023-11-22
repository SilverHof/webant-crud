import axios from "axios";
import { constant_comments } from "../utils/constants/constant_comments";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

interface PostProps {
   postId: number | null;
   id: number | null;
   name: string;
   email: string;
   body: string;
}

export const getComments = async () => {
   try {
      const result = await axios.get(constant_comments);
      return result;
   } catch (error) {
      console.log(error);
   }
};

export const getComment = async (id: string) => {
   try {

      const result = await axios.get(constant_comments + `/${id}`);
      return result;
   } catch (error) {
      console.log(error);
   }
};

export const postComment = async (formData: PostProps) => {
   try {
      const result = await axios.post(constant_comments, formData);
      return result;
   } catch (error) {
      console.log(error);
   }
};

export const putComment = async () => {
   try {
      const result = await axios.put(constant_comments, {
         postId: 101,
         id: 600,
         name: "string",
         email: "string",
         body: "string",
      });
      return result;
   } catch (error) {
      console.log(error);
   }
};

export const deleteComment = async (id: number) => {
   try {
      const result = await axios.delete(constant_comments + `/${id}`);
      return result;
   } catch (error) {
      console.log(error);
   }
};
