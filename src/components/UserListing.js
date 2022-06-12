import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/userActions";
import UserComponent from "./UserComponent";

const UserPage = () => {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users :", users);
  return (
    <div className="ui grid container">
      <UserComponent />
    </div>
  );
};

export default UserPage;