import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = props => {
    const [ state, setState ] = useState({
        user: null,
        repos: [],
        error: false,
        loading: false,
        theme: true
    });

    return (
        <Context.Provider value={{state, setState}}>
            {props.children}
        </Context.Provider>
    )
};

export { Context };
export default ContextProvider;