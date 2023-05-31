import React from "react";
import "./BurgerButton.css";
type TBurgerButton = {
  cb?: () => void;
};
const BurgerButton = ({ cb }: TBurgerButton) => {
  return (
    <article className={"BurgerButton"} onClick={cb}>
      <section className={"BurgerButton-wrapper"}>
        <span className={"BurgerButton_f"}></span>
        <span className={"BurgerButton_s"}></span>
        <span className={"BurgerButton_t"}></span>
      </section>
    </article>
  );
};

export default BurgerButton;
