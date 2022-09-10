import { applayAdditionalTheme, applayMainTheme } from "./theme";

const ActivePanel = () => {
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

export default ActivePanel;
