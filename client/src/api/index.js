import Backendless from "backendless";
import { Tables } from "../constants/index";

const API = {
  login: (password) =>
    Backendless.BL.CustomServices.invoke("simple_login", "login", password),

  saveProduct: (product) => Backendless.Data.of(Tables.GOODS).save(product),

  getProduct: (type) => {
    if (type) {
      const query = Backendless.DataQueryBuilder.create()
        .setWhereClause(`type = "${type}"`)
        .setSortBy(["availability DESC", "name"])
        .setPageSize(100);

      return Backendless.Data.of(Tables.GOODS).find(query);
    } else {
      const query = Backendless.DataQueryBuilder.create()
        .setSortBy(["availability DESC", "name"])
        .setPageSize(100);

      return Backendless.Data.of(Tables.GOODS).find(query);
    }
  },

  removeProduct: (id) => Backendless.Data.of(Tables.GOODS).remove(id),

  saveComment: (comment) => Backendless.Data.of(Tables.COMMENTS).save(comment),

  getComment: (accepted) => {
    if (accepted) {
      const query = Backendless.DataQueryBuilder.create()
        .setWhereClause(`accepted = true`)
        .setPageSize(100);

      return Backendless.Data.of(Tables.COMMENTS).find(query);
    } else {
      const query = Backendless.DataQueryBuilder.create()
        .setWhereClause(`accepted = false`)
        .setPageSize(100);

      return Backendless.Data.of(Tables.COMMENTS).find(query);
    }
  },

  removeComment: (id) => Backendless.Data.of(Tables.COMMENTS).remove(id),
  
  test: () => {
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Мед",
        price: 250,
        description: "Смачний мед",
      }),
    })
    .then((res) => res.json())
    .then((data) => console.log("Відповідь: ",data))
    .catch((err) => console.error("Помилка: ", err));
  }
};

export { API };
