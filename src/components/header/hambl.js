const Hambl = () => {
  return (
    <div className="hambl" onClick={hamblHandler}>
      <span className="hambl-line"></span>
      <span className="hambl-line"></span>
      <span className="hambl-line"></span>
    </div>
  );
};

export default Hambl;

const hamblHandler = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const hambl = document.querySelector(".hambl");
  hambl.classList.toggle("active");
  mobileMenu.classList.toggle("mobile-menu-active");
  mobileMenu.classList.contains("mobile-menu-active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
};
