export const applayMainTheme = () => {
  const footer = document.querySelector(".footer");
  document.documentElement.style.setProperty("--bg-color", "#fffbf0");
  document.documentElement.style.setProperty("--primary-color", "#d5a53c");
  document.documentElement.style.setProperty("--color-text", "black");
  footer.style.background = "#3f2414";
  localStorage.setItem("theme", "main");
};

export const applayAdditionalTheme = () => {
  const footer = document.querySelector(".footer");
  document.documentElement.style.setProperty("--bg-color", "#e78f63");
  document.documentElement.style.setProperty("--primary-color", "#ad4a2b");
  document.documentElement.style.setProperty("--color-text", "#fffee9");
  footer.style.background = "#3d3e3b";
  localStorage.setItem("theme", "additional");
};

export const loadTheme = () => {
  if (localStorage.getItem("theme") === "additional") {
    const footer = document.querySelector(".footer");
    document.documentElement.style.setProperty("--bg-color", "#e78f63");
    document.documentElement.style.setProperty("--primary-color", "#ad4a2b");
    document.documentElement.style.setProperty("--color-text", "#fffee9");
    footer.style.background = "#3d3e3b";
  }
};
