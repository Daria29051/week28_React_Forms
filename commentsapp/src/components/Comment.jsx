import React, { useState } from "react";
import "./comment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight} from '@fortawesome/free-solid-svg-icons';


export default function Comment() {
  let [value, setValue] = useState("");
  let [comment, setComment] = useState([]);


  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const sendData = () => {
    if (value !== "") {
    let commentValueChecked = value.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    setComment((prevState) => [commentValueChecked, ...prevState]);
}
  }

  const clearInput = () => {
  setValue('');
  }

  return (
    <div>
      <h1>Оставьте Ваш комментарий:</h1>
      <div className="comment__total ">
        <div className="comment__output">
          {comment.length !== 0 ? <div className="comment__item first-item">{comment[0]}</div>  : ""}
          {comment.length !== 0
            ? comment.slice(1).map((item, index) => (
                <div className="comment__item" key={index}>
                  {item}
                </div>
              ))
            : ""}
        </div>
        <div className="comment__container">
        <textarea className="comment__input" rows="5" cols="73" value={value} onChange={handleChange}/>
        <FontAwesomeIcon icon={faRotateRight} className="comment__icon" onClick={clearInput} />
        </div>
        <button className="comment__button" onClick={sendData}>
          Отправить
        </button>
      </div>
    </div>
  );
}
