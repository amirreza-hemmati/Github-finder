import React from "react";

const Avatar = ({ avatarUrl }) => {
  return (
    <div className="card-img-top">
      <img src={avatarUrl} alt="Avatar Image" />
    </div>
  );
};

export default Avatar;
