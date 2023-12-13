import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import "./content.css";
import { FaArrowUp, FaTrashAlt } from "react-icons/fa";
import { reviewList } from "../../App";

interface Props {
  addNewReview: Function;
  deleteReview: Function; 
  reviews: reviewList[];
}

const Content: React.FC<Props> = (props: Props) => {
  const [content, setContent] = useState<string>("");
  const [remainingChars, setRemainingChars] = useState<number>(200);
  const inputRef: MutableRefObject<any> = useRef();

  const handleAddReview = (): void => {
    const newReview: reviewList = {
      id: Math.random() * 100000,
      content: content,
      date: Date.now(),
    };
    props.addNewReview(newReview);
    setContent("");
    setRemainingChars(200);
    inputRef.current.focus();
  };

  const handleDeleteReview = (id: number): void => {
    props.deleteReview(id);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const inputContent = e.target.value;
    setContent(inputContent);

    const remaining = 200 - inputContent.length;
    setRemainingChars(remaining < 0 ? 0 : remaining);
  };

  return (
    <div className="main-content">
      <div className="input-content">
        <textarea
          ref={inputRef}
          value={content}
          onChange={handleInputChange}
          name="input-ta"
          id="input-ta"
          placeholder="Type review here..."
        ></textarea>
        <div className="inside-input-content">
          <span>{remainingChars} characters left</span>
          <button className="publish-btn" onClick={handleAddReview}>
            PUBLISH <FaArrowUp />
          </button>
        </div>
      </div>
      <div className="out-new-content">
        {props.reviews.map((review, index) => (
          <div key={review.id} className="new-content">
            <p>{review.content}</p>
            <div className="inside-output-content">
              <span>{new Date(review.date).toLocaleDateString()}</span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteReview(review.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
