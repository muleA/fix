import axios from 'axios';
import { useRouter } from 'next/router';

export const login = async (query: any) => {
  await axios
    .post(
      'http://192.168.1.6:8080/realms/eservice/protocol/openid-connect/token',
      `client_id=eservice&grant_type=password&scope=profile&username=${query.username}&password=${query.password}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
    .then( async (response) => {
      await localStorage.setItem('access_token', response.data.access_token);
    })
    .catch(function (error) {
      console.log(error);
    });

 await axios
    .post(
      'http://192.168.1.6:8080/realms/eservice/protocol/openid-connect/userinfo',
     await localStorage.getItem('access_token'),
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(async (response) => {
       await localStorage.setItem('user_sub', response.data.sub);
       await localStorage.setItem('user_name', response.data.name);
       await localStorage.setItem('user_email', response.data.email);
       return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
}
export const Logout=async ()=>{
const data={
realm:'eservice',
user:localStorage.user_sub
}
await axios.post(`http://192.168.1.6:8080/admin/realms/eservice/users/${localStorage.user_sub}/logout`,data)
.catch(function (error) {
  console.log(error);
});
}
