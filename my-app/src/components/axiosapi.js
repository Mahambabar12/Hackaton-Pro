import axios from 'axios'
var apiUrl = 'http://192.168.100.9:5000'
async function requestHeader() {
  let user = await sessionStorage.getItem('user');
  user = user === undefined ? '' : JSON.parse(user);
  if (user && user.token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + user.token,
    };
  } else {
    return {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
  }
}

const fetchPost = async (data, url) => {
  var config = {
    method: 'post',
    url: apiUrl + url,
    headers: await requestHeader(),
    data: data,
  };
  return axios(config);
};


const fetchGet = async url => {
  var config = {
    method: 'get',
    url: apiUrl + url,
    headers: await requestHeader(),
  };

  return axios(config);
};


export default {fetchGet, fetchPost}