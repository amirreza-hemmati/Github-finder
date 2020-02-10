import React from "react";
import Avatar from "./Avatar/Avatar";
import InformationUser from "./InformationUser/InformationUser";

const Profile = ({
  userName,
  avatarUrl,
  name,
  bio,
  location,
  repo,
  followers,
  following,
  type,
  html_url
}) => {
  return (
    <div className="col-md-4 col-xs-12 m-0 p-0">
      <Avatar avatarUrl={avatarUrl} />
      <div className="linkGoPage">
        <a href={html_url} className="btn" target="_blank" rel="noopener noreferrer">
          Go to Page User
        </a>
      </div>
      <InformationUser
        userName={userName}
        name={name}
        location={location}
        repo={repo}
        followers={followers}
        following={following}
        type={type}
      />
      <p className="bio">{bio}</p>
    </div>
  );
};

export default Profile;