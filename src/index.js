import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
        <CommentDetail></CommentDetail>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/">Sam</a>
          <div className="metadata">
            <span className="date"> At 4:32</span>
          </div>
          <div className = "text">Shitty blog</div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
