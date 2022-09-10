import axios from "axios";

const baseUrl = "https://queenlyrain.backendless.app/api/data/";

export async function getProduct(products) {
  try {
    const response = await axios.get(baseUrl + products);
    return response;
  } catch (e) {
    console.log(e);
  }
}
