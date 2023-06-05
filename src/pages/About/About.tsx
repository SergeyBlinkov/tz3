import React from "react";
import me from "../../assets/me.jpeg";
import TitleAndList from "../../shared/TitleAndList/TitleAndList";
import "./About.css";
import Header from "../../features/Header/Header";
import MyProject from "../../shared/MyProject/MyProject";

let project1 = {
  title: "Сайт интернет магазин",
  description:
    "Сайт полностью реализован, остались некоторые доработки интерфейса." +
    "Основной стек: Backend - Postgresql , Rest-api, React-Typescript,Redux Toolkit,MaterialUi" +
    "Система Личного кабинета,Админ доступ, JWT Token[access,refresh] ",
  code: "https://github.com/SergeyBlinkov/noveltyConveyor",
};
let project2 = {
  title: "Сайт-кулькулятор ремонта",
  description:
    "Сайт полностью функционирует и имеет деплой,домен. Позволяет расчитать ремонт в ванной комнате," +
    "сайт без [ Database ] все данные находятся в JSON формате, реализован довольно сложный калькулятор, покрывающий почти полное безрассудство пользователя" +
    "Способен помогать людям в реальной жизни. Основной стек технологий: React-Typescript,Redux Toolkit",
  code: "https://github.com/SergeyBlinkov/YaStroitel",
  deploy: "https://www.stroihelper.ru/",
};

let project3 = {
  title: "Красивый стилизованный сайт пустышка",
  description:
    "Сайт внешне имеет красивую стилистику, реализована только десктопная версия, сайт был выполнен в качестве тестового задания",
  code: "https://github.com/SergeyBlinkov/StylishSite",
  deploy: "https://webtronics-ochre.vercel.app/",
};

let listMe = [
  "Опыт работы 3+лет ─ frontend.",
  "React ─ 2.5 года.",
  "Typecsript ─ 1+ лет",
  "Next.js ─ три небольших проекта",
];

let list1 = [
  "отправка запросов через redux-thunk",
  "все запросы были через axios",
  "отправка токенов в заголовках(header) к запросу",
  "лимитирование, пагинация",
  "работа с interceptor",
  "loader, вывод ошибок.",
];
let list2 = [
  "лимитирование, пагинация, фильтрация",
  "[ infinite-scroll ]",
  "GET,POST,PUT,DELETE",
];
let list3 = [
  "[ Bootstrap ]",
  "[ Material-ui ]",
  "[ Tailwind ]",
  "[ styled-components ]",
];
let list4 = [
  " auth/registration (полная авторизация через db" + "[ Posgresq ])",
  "Корзина товаров, продукты, все через db",
  "Передача в куках [JWT] tokena",
  "Обновление accessToken через refreshToken.",
];
let list5 = [
  "реализация auth/registration",
  "открывал tcp протокол для лайв чата(по сути тут больше front, back был уже написан)",
];
let list6 = [
  "Настраивал [ Docker-Compose ]",
  "Создание данных в database через sequelize",
];
const About = () => {
  return (
    <div className={"About"}>
      <Header title={"Обо мне"} hr={"/about"} />
      <section className={"About-me"}>
        <img src={me} alt={"me"} />
        <section>
          <TitleAndList title={"Обо мне"} list={listMe} />
          <h6>Связаться со мной:</h6>
          <ul>
            <li style={{ padding: 5 }}>Telegram:@SergeyBlinkov</li>
            <li style={{ padding: 5 }}>Email:blinok1896@gmail.com</li>
            <li style={{ padding: 5 }}>Phone: +7(967)722-28-00</li>
          </ul>
        </section>
      </section>
      <section className={"About_Frontend"}>
        <h3>Технологии которые использовал связанные с Frontend:</h3>
        <TitleAndList
          title={
            "На клиентской части обрабатывал все операции которые приходили с backenda:"
          }
          list={list1}
        />
        <TitleAndList title={"Rest-api"} list={list2} />
        <TitleAndList title={"Ui"} list={list3} />
        <TitleAndList title={"Deploy"} list={["Vercel"]} />
        <TitleAndList title={"Архетиктура"} list={["Feature-Slice-Design"]} />
      </section>
      <section className={"About_Backend"}>
        <h3>Технологии связанные с backend:</h3>
        <TitleAndList title={"NodeJs"} list={list4} />
        <TitleAndList title={"Опыт работы с [Firebase]"} list={list5} />
        <TitleAndList title={"Так же ещё"} list={list6} />
      </section>
      <section className={"About_MyProject"}>
        <h3>Мои проекты:</h3>
        <MyProject
          title={project1.title}
          description={project1.description}
          code={project1.code}
        >
          <li>
            <a href={"https://github.com/SergeyBlinkov/noveltyConveyorBackend"}>
              backend
            </a>
          </li>
        </MyProject>
        <MyProject
          title={project2.title}
          description={project2.description}
          code={project2.code}
          deploy={project2.deploy}
        />
        <MyProject
          title={project3.title}
          description={project3.description}
          code={project3.code}
          deploy={project3.deploy}
        />
      </section>
    </div>
  );
};

export default About;
