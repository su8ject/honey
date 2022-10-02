import Backendless from "backendless";
import { Tables } from '../constants/index'

const API = {
  login: password => Backendless.BL.CustomServices.invoke('simple_login', 'login', password),

  saveProduct: product => Backendless.Data.of(Tables.GOODS).save(product),

  getProduct: type => {
    if (!type) {
      throw new Error('Type must be provided!')
    }

    const query = Backendless.DataQueryBuilder.create()
      .setWhereClause(`type = ${ type }`)
      .setPageSize(100)

    return Backendless.Data.of(Tables.GOODS).find(query)
  },
}

export {
  API
}

