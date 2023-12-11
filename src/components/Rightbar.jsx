import React from "react";
import "../style/rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              //img
              <span>User Name</span>
              <div className="Button">
                <button>Follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest activities</span>
          <div className="userInfo">
            //img
            <p>
              <span>User Name</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
