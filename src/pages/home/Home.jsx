import React from "react";
import "../../style/home.scss";
import { Stories } from "../../stories/Stories";
import { Share } from "../../components/Share";
import { Posts } from "../../components/Posts";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
