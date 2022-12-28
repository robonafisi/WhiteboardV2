import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://opentdb.com/api.php?amount=10";

export default function App() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategory(response.data.results[0].category);
      setDifficulty(response.data.results[0].difficulty);
      setType(response.data.results[0].type);
      setQuestion(response.data.results[0].question);
      setAnswer(response.data.results[0].correct_answer);
    });
  });

  if (!category) return null;

  return (
    <div>
      <h1>Hello</h1>
      <p>{category}</p>
      <p>{difficulty}</p>
      <p>{type}</p>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}