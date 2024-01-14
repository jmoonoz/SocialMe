import React from "react";
import { Stories } from "../../stories/Stories";
import Posts from "../../components/Posts";
import "../../style/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
      home
    </div>
  );
};

export default Home;
