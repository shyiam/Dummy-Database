import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users);
  const renderList = users.map((user) => {
    const { id, email, first_name, last_name, avatar=`https://reqres.in/img/faces/${id}-image.jpg` } = user;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/user/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={avatar} alt={first_name} />
              </div>
              <div className="content">
                <div className="header">{first_name}</div>
                <div className="header">{last_name}</div>
                <div className="meta"> {email}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default UserComponent;