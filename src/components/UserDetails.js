import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUser,
  removeSelectedUser,
} from "../redux/actions/userActions";
const UserDetails = () => {
  const { userId } = useParams();
  let user = useSelector((state) => state.user);
  const { id, first_name, last_name, email, avatar=`https://reqres.in/img/faces/${id}-image.jpg` } = user;
  const dispatch = useDispatch();
  const fetchUserDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedUser(response.data));
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUserDetail(userId);
    return () => {
      dispatch(removeSelectedUser());
    };
  }, [userId]);
  return (
    <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={avatar} />
              </div>
              <div className="column rp">
                <h1>{first_name}</h1>
                <h2>
                  <a className="ui teal tag label">{last_name}</a>
                </h2>
                <h3 className="ui brown block header">{email}</h3>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;