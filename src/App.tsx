import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/content";

export interface reviewList {
  id: number;
  content: string;
  date: number;
}

function App() {
  const [review, setReview] = useState<reviewList[]>([]);

  const addNewReview = (review: reviewList): void => {
    setReview((prev: reviewList[]) => [...prev, review]);
  };

  const deleteReview = (id: number): void => {
    const newReview = review.filter((item) => item.id !== id);
    setReview(newReview);
  };
  return (
    <div className="App">
      <Header></Header>
      <Content addNewReview={addNewReview} reviews={review} deleteReview={deleteReview}  ></Content>
    </div>
  );
}

export default App;
