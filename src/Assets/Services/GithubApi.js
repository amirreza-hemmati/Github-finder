import axios from 'axios';

const Axios = axios.create({
  baseURL: "https://api.github.com/users/"
});

// get user with user name
const getUserWithUserName = userName => {
  return Axios.get(userName);
};

const getUserRepos = ({userName, repos_url}) => {

  return axios.get(repos_url);

}

export { getUserWithUserName, getUserRepos };