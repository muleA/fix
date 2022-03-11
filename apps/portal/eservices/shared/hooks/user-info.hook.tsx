import { createHook } from 'async_hooks';
import { useState, useEffect } from 'react';

function useUserInfo() {
  const [user_sub, setUserSub] = useState();
  const [user_name, setUserName] = useState();
  const [user_email,setUserEmail] = useState();

  useEffect(() => {
setUserSub(localStorage.user_sub)
setUserName(localStorage.user_name)
setUserEmail(localStorage.user_email)
  },[]);

  return {user_sub,user_name,user_email};
}
export default useUserInfo;
