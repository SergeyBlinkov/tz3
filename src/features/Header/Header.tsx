import React from "react";
import { Container, Navbar } from "react-bootstrap";
import MenuBar from "../MenuBar/MenuBar";

type THeader = {
  title?: string;
};

const Header = ({ title }: THeader) => {
  return (
    <Navbar bg="light" className={"Header"}>
      <MenuBar />
      <Container>
        <Navbar.Brand href="/">
          {title ? title : "Навигационная панель"}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/about">Сергей Блинков</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
