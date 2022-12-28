import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://opentdb.com/api.php?amount=10";

export default function App() {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results[0].question);
      console.log("This is post:",post);
      console.log(response.data.results[0].question);
      //console.log(typeof(response.data.results[0].category));
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Hello</h1>
      <h1>{post}</h1>
    </div>
  );
}