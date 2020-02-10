import React from 'react';
import Profile from './Profile/Profile';
import Repo from './Repo/Repo';

const User = ({ user, repos }) => {
  return (
    <section className="container row user">
      {user && (
        <Profile
          userName={user.login}
          avatarUrl={user.avatar_url}
          name={user.name}
          bio={user.bio}
          location={user.location}
          repo={user.public_repos}
          followers={user.followers}
          following={user.following}
          type={user.type}
          html_url={user.html_url}
        />
      )}
      {repos && <Repo />}
    </section>
  );
};

export default User;