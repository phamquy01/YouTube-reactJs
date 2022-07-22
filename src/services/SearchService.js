import axios from 'axios';
import ConstantList from '../config/AppConst';

const API_PATH = ConstantList.API_ENDPOINT + 'search?' + ConstantList.API_KEY;

export const searchVideo = (dataAPI) => {
  let config = `&part=snippet&q=${dataAPI.search}&maxResults=${dataAPI.number}&pageToken=${dataAPI.pageToken}`;
  return axios.get(API_PATH + config);
};
