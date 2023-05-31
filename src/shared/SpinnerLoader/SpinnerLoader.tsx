import React from "react";
import { Spinner } from "react-bootstrap";
import "./SpinnerLoader.css";

const SpinnerLoader = ({ show }: { show: boolean }) => {
  return (
    <article className={"SpinnerLoader"}>
      {show && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </article>
  );
};

export default SpinnerLoader;
