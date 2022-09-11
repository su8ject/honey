const DeliveryContainer = ({ children, header }) => {
  return (
    <div className="delivery-container">
      <h2 className="primary-header">{header}</h2>
      {children}
    </div>
  );
};

export default DeliveryContainer;
