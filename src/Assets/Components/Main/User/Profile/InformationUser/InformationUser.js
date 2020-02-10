import React from "react";

const InformationUser = ({userName, name, location, repo, followers, following, type}) => {
  return (
    <ul className="list-group InformationUser">

      <li className="list-group-item">
          <span>userName</span>
          
          <span>{userName}</span>
      </li>

      <li className="list-group-item">
          <span>name</span>
          
          <span>{name}</span>
      </li>

      <li className="list-group-item">
          <span>location</span>
          
          <span>{location}</span>
      </li>

      <li className="list-group-item">
          <span>repo</span>
          
          <span>{repo}</span>
      </li>

      <li className="list-group-item">
          <span>followers</span>
          
          <span>{followers}</span>
      </li>

      <li className="list-group-item">
          <span>following</span>
          
          <span>{following}</span>
      </li>

      <li className="list-group-item">
          <span>type</span>
          
          <span>{type}</span>
      </li>

    </ul>
  );
};

export default InformationUser;
