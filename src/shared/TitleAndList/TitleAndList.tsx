import React from "react";
import "./TitleAndList.css";
type TTitleAndList = {
  title: string;
  list: string[];
};

const TitleAndList = ({ title, list }: TTitleAndList) => {
  return (
    <article className={"TitleAndList"}>
      <h6>{title}</h6>
      <ul className={"TitleAndList_list"}>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default TitleAndList;
