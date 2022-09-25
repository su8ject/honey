export const PageTitle = ({ header, text }) => {
  return (
    <section>
      <div className="wrapper">
        <h1 className="main--header">{header}</h1>
        <p className="primary-text">{text}</p>
      </div>
    </section>
  );
};
