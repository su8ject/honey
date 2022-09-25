export const PhoneNumber = ({ phoneNumber }) => {
  return (
    <a href={"tel:" + "+" + phoneNumber} className="phone">
      {"+" + phoneNumber}
    </a>
  );
};
