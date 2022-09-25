export const ActivePanel = ({ setTheme }) => {
  const applayMainTheme = () => {
    setTheme("main-theme");
    localStorage.setItem("theme", "main");
  };

  const applayAdditionalTheme = () => {
    setTheme("additional-theme");
    localStorage.setItem("theme", "additional");
  };

  return (
    <div className="active-panel">
      <div className="notification"></div>
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
