import React from 'react'

const Snackbar = ({text, type, isShow}) => {
    return <div className={`snackbar ${type} ${isShow === true && "show-snackbar"}`}>{text}</div>;
}

export default Snackbar
