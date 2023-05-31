import React, { ReactElement, ReactNode } from "react";
import "./MyProject.css";
type TMyProject = {
  title: string;
  description: string;
  code: string;
  deploy?: string | null;
  children?: ReactElement | ReactNode;
  img?: string[];
};

const MyProject = ({
  title,
  description,
  code,
  deploy,
  children,
}: TMyProject) => {
  return (
    <article className={"MyProject"}>
      <section>
        <h6>{title}</h6>
        <p>{description}</p>
      </section>
      <ul>
        <li>
          <a href={code}>Сам код</a>
        </li>
        {children}
        {deploy && (
          <li>
            <a href={deploy}>Деплой</a>
          </li>
        )}
      </ul>
      <div></div>
    </article>
  );
};

export default MyProject;
