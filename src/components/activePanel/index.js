import "./style.scss";

export const ActivePanel = ({ setTheme }) => {
  const applyMainTheme = () => {
    setTheme("theme-light");
    localStorage.setItem("theme", "main");
  };

  const applyAdditionalTheme = () => {
    setTheme("theme-dark");
    localStorage.setItem("theme", "additional");
  };

  return (
    <div className="active-panel">
      <div className="none"></div>
      <div className="theme-buttons">
        <button
          onClick={applyMainTheme}
          type="button"
          className="main-theme-button"
        ></button>
        <button
          onClick={applyAdditionalTheme}
          type="button"
          className="additional-theme-button"
        ></button>
      </div>
    </div>
  );
};
