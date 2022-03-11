import { appApi } from "../../../../shared/store/app.api";
import  User  from "../../../..//models/user";


const userApi = appApi.injectEndpoints({
    endpoints: builder => ({
        
        loginUser: builder.mutation<any, User>({
            query: (credentials) => ({
                url: `http://192.168.1.6:8080/realms/eservice/protocol/openid-connect/token`,
                method: 'POST',
                body: credentials,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
        }),
    }),
})

export const { useLoginUserMutation }  = userApi;