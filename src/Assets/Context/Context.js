import React, { createContext, useState } from 'react';

const Context = createContext();

if(!localStorage.getItem("theme")){
	localStorage.setItem("theme", true);
};
let theme = localStorage.getItem("theme");

const ContextProvider = props => {
    const [ state, setState ] = useState({
        user: null,
        repos: [],
        error: false,
        loading: false,
        theme: theme === "true" ? true : false
    });

    return (
        <Context.Provider value={{state, setState}}>
            {props.children}
        </Context.Provider>
    )
};

export { Context };
export default ContextProvider;