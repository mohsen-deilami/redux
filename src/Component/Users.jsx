import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/UsersSlice";


export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (

      <div>
        <h2>Users</h2>   

  {users.loading ? <h3>loading</h3> : null}
  {users.users.length ? users.users.map(user =>(
    <p>{user.name}</p>
  )) : null}
  
        </div>
  )
}
