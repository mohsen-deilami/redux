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
        {users !== undefined ? (
            <>
          { users.loading ? <h3>Loading...</h3> : null}
          {users.users.length ? users.map(user => <p>{user.name}</p>) :null}
            </>
        ) : null }
  <button onClick={()=>console.log(users)
  }>View Users</button>
  
        </div>
  )
}
