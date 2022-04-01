import { apiSlice } from "../../../../store/app.api";
import { User } from "../../../..//models/user";
import authEndPoint from '../../auth.endpoint';

const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        
        loginUser: builder.mutation<any, User>({
            query: credentials => ({
                url: `${authEndPoint.login}`,
                method: 'POST',
                body: credentials
            })
        })
    }),
    overrideExisting: false, 
})

export const { useLoginUserMutation }  = userApi;