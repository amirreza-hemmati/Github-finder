import React, { useContext } from 'react';
import Icon from 'react-eva-icons';
import { Context } from './../../../Context/Context';

const ButtonTheme = () => {

    const { state, setState } = useContext(Context);
    const { theme, user } = state;

    const setThemeHandler = () => {
        setState(preveState => ({
            ...preveState,
            theme: !preveState.theme
        }));
		localStorage.setItem("theme", !theme);
    }

    return (
      <>
        {user && (
          <button
            className="button-theme bg-dark border"
            onClick={setThemeHandler}
          >
            <Icon
              name="bulb-outline"
              size="xlarge"
              fill="white"
              animation={{
                type: "flip",
                hover: true,
                infinite: false
              }}
            />
          </button>
        )}
      </>
    );
}

export default ButtonTheme
