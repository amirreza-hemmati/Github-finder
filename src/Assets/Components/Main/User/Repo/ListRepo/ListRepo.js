import React, { useContext } from 'react';
import { Context } from './../../../../../Context/Context';
import ListItemRepo from './ListItemRepo/ListItemRepo';

const ListRepo = () => {
    const { state } = useContext(Context);
    const { repos } = state;

    return (
      <ul className="list-group">
        {repos.length >= 1 &&
          repos.map((el, key) => (
            <ListItemRepo
              html_url={el.html_url}
              name={el.name}
              privates={el.private}
              lang={el.lang}
              key={key}
            />
          ))}
      </ul>
    );
}

export default ListRepo
