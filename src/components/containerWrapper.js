export const ContainerWrapper = ({ children, header }) => {
  return (
    <div>
      <h2 className="primary-header">{header}</h2>
      <div className="advances">{children}</div>
    </div>
  );
};
