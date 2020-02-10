import React, { useState, useContext, useRef } from 'react';
import { getUserWithUserName, getUserRepos } from './../../../Services/GithubApi'
import { Context } from './../../../Context/Context';

const Search = () => {
    const [ value, setValue ] = useState("");
    const { setState } = useContext(Context);
    const btn = useRef();

    const setLoadingHandler = amount => {
        setState(preveState => ({
            ...preveState,
            loading: amount,
            error: false
        }))
    };

    const setUsersHandler = user => {
        setState(preveState => ({
            ...preveState,
            user
        }));
    }

    const setUserRepos = repos => {
        setState(preveState => ({
            ...preveState,
            repos
        }));
    }

    const setErrorHandler = amount => {
        setState(preveState => ({
          ...preveState,
          error: amount
        }));
    }

    const fieldChange = event => {
        setValue(event.target.value);
    };

    const fieldKeyup = event => {
        if(event.keyCode === 13){
            btn.current.click();
        }
    }

    const btnHandler = () => {

        setLoadingHandler(true);

        getUserWithUserName(value)
            .then(({data}) => {
                setUsersHandler(data);
                setValue("");

                getUserRepos({ userName: data.userName, repos_url: data.repos_url})
                    .then(repos => {
                        const arrRepo = [];
                        for(let index = 0; index <= 5; index++){
                            const el = repos.data[index];
                            arrRepo.push({
                              lang: el.language,
                              name: el.name,
                              html_url: el.html_url
                            });
                        }
                        setUserRepos(arrRepo);
                        setLoadingHandler(false);
                    })
                    .catch(error => {
                        throw new Error(error);
                    })

            })
            .catch(() => {
                setLoadingHandler(false);
                setErrorHandler(true);
                setTimeout(() => { 
                    setErrorHandler(false);
                    console.clear();
                }, 4000);
                setValue("");

            })

    };

    return (
      <section className="search">
          <input type="text" className="form-control" value={value} placeholder="please write user name" onChange={event => fieldChange(event)} onKeyUp={event => fieldKeyup(event)} />
          <button type="button" ref={btn} className="btn" disabled={value === "" && true} onClick={btnHandler} >Search User</button>
      </section>
    );
}

export default Search;