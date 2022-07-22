import axios from 'axios';
import ConstantList from '../config/AppConst';

const API_PATH = ConstantList.API_ENDPOINT + 'videos?' + ConstantList.API_KEY;
const API_PATH_FILTER =
  ConstantList.API_ENDPOINT + 'search?' + ConstantList.API_KEY;

export const getVideo = (dataHome) => {
  let config = `&chart=mostPopular&maxResults=${dataHome.number}&part=snippet&pageToken=${dataHome.pageToken}`;
  return axios.get(API_PATH + config);
};

export const filterVideo = (dataFilter) => {
  let config = `&part=snippet&q=${dataFilter.search}&maxResults=${dataFilter.number}&pageToken=${dataFilter.pageToken}`;
  return axios.get(API_PATH_FILTER + config);
};
