import { useEffect, useState } from "react";
import { API } from "../../api";
import { Comments } from "./comments";
import { EditingProducts } from "./editingProducts";

export const Admin = () => {
  const [view, setView] = useState("");
  const [hasAccess, setHasAccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const login = async (password) => {
      setHasAccess(await API.login(password));
    };

    const password = prompt("Введіть пароль", "");

    login(password);
  }, []);

  if (hasAccess === null) {
    return null;
  }

  if (!hasAccess) {
    return <div className="bg">Пароль не вірний</div>;
  }

  return (
    <div className="bg">
      {error && <span> {error} </span>}
      <div className="buttons">
        <button className="button" onClick={() => setView("products")}>
          Товари
        </button>
        <button className="button" onClick={() => setView("comments")}>
          Коментарі
        </button>
      </div>
      {view === "products" ? (
        <EditingProducts />
      ) : view === "comments" ? (
        <Comments />
      ) : (
        <div className="wrapper"></div>
      )}
    </div>
  );
};
