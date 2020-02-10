import React, { useContext } from 'react';
import Search from './Search/Search';
import LoadingUser from './LoadingUser/LoadingUser';
import User from './User/User';
import ButtonTheme from './ButtonTheme/ButtonTheme';
import { Context } from './../../Context/Context';

const Main = () => {
    const { state } = useContext(Context);
    const { loading, user, repos, theme } = state;

    return (
      <main className={theme ? "bg-white" : "bg-dark"}>
        <Search />
        {loading && <LoadingUser />}
        {user && <User user={user} repos={repos} />}
        <ButtonTheme/>
      </main>
    );
}

export default Main
