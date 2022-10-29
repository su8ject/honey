export const PageTitle = ({ header, text }) => {
  return (
    <div className="page-title">
      <h1 className="page-title--header">{header}</h1>
      <p className="primary-text">{text}</p>
    </div>
  );
};
