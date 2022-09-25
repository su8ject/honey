import sprite from "../../img/sprite.svg";

export const Inst = () => {
  return (
    <a target="_blank" href="https://www.instagram.com/mukola_m_/?hl=ru">
      <svg className="footer--social-icon">
        <use href={sprite + "#inst"}></use>
      </svg>
    </a>
  );
};
