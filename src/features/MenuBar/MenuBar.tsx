import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import BurgerButton from "../../shared/BurgerButton/BurgerButton";
import me from "../../assets/me.jpeg";
import "./MenuBar.css";
const MenuBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Информация обо мне</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <img src={me} alt={"user"} width={120} height={120} />

            <li>
              <h6>Email:</h6>
              <p>blinok1896@gmail.com</p>
            </li>
            <li>
              <h6>Имя:</h6>
              <p>Сергей</p>
            </li>
          </ul>
          <Offcanvas.Title>Меню</Offcanvas.Title>
          <nav className={"MenuNav"}>
            <a href={"/"}>Главное меню</a>
            <a href={"/about"}>Обо мне</a>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      <BurgerButton cb={handleOpen} />
    </>
  );
};

export default MenuBar;
