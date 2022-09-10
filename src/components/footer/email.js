const Email = ({ email }) => {
  return (
    <a href={"mailto:" + email} className="phone none-decoration">
      {email}
    </a>
  );
};

export default Email;
