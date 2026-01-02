import Backendless from "backendless";
import { Tables } from "../constants/index";

const API = {
  /* login: (password) =>
    Backendless.BL.CustomServices.invoke("simple_login", "login", password), */

  saveProduct: (product) => {
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
    .then((res) => res.json())
    .then((data) => console.log("Відповідь: ",data))
    .catch((err) => console.error("Помилка: ", err));
  },

  getProducts: async (type) => {
    if (type) {
      return fetch("http://localhost:5000/api/type/" + type)
      .then((res) => res.json())
    } else {
      return fetch("http://localhost:5000/api/products/")
      .then((res) => res.json())
    };
  },

  getComments: async () => {
    return fetch("http://localhost:5000/api/comments/")
    .then((res) => res.json())
  },

  // removeProduct: (id) => Backendless.Data.of(Tables.GOODS).remove(id),

  /* saveComment: (comment) => Backendless.Data.of(Tables.COMMENTS).save(comment), */

  /* getComment: (accepted) => {
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
  }, */

  /* removeComment: (id) => Backendless.Data.of(Tables.COMMENTS).remove(id), */
};

export { API };
