import { appApi } from "../../../../store/app.api"
import { HomeEndpoint } from "../../home.endpoint";

const homeQuery = appApi.injectEndpoints({
endpoints:(builder)=>({
    getServices: builder.query<any, any>({
        query: () => ({
          url: `${HomeEndpoint.list}`,
          method: 'GET'
        })
      }),
})
})
export const {useLazyGetServicesQuery} = homeQuery;