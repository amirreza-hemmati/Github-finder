import React from "react";

const ListItemRepo = props => {
    const {html_url, name, lang} = props;
  return (
    <li className="list-group-item">
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <span className="badge badge-dark">{lang}</span>
    </li>
  );
};

export default ListItemRepo;
