import sprite from "../../img/sprite.svg";

const Inst = () => {
  return (
    <a target="_blank" href="https://www.instagram.com/mukola_m_/?hl=ru">
      <svg className="footer--social-icon">
        <use href={sprite + "#inst"}></use>
      </svg>
    </a>
  );
};

export default Inst;
