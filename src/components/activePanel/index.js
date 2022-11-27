import "./style.scss";

export const ActivePanel = ({ setTheme }) => {
  const applayMainTheme = () => {
    setTheme("theme-light");
    localStorage.setItem("theme", "main");
  };

  const applayAdditionalTheme = () => {
    setTheme("theme-dark");
    localStorage.setItem("theme", "additional");
  };

  return (
    <div className="active-panel">
      <div className="none"></div>
      <div className="theme-buttons">
        <button
          onClick={applayMainTheme}
          type="button"
          className="main-theme-button"
        ></button>
        <button
          onClick={applayAdditionalTheme}
          type="button"
          className="additional-theme-button"
        ></button>
      </div>
    </div>
  );
};
