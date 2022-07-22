import axios from 'axios';
import ConstantList from '../config/AppConst';

const API_PATH = ConstantList.API_ENDPOINT + 'search?' + ConstantList.API_KEY;

export const getVideoSuggest = (idvideo) => {
  let config = `&part=snippet&maxResults=50&relatedToVideoId=${idvideo}&type=video`;
  return axios.get(API_PATH + config);
};

export const getVideoDetail = (id) => {
  let config = `&part=snippet&part=statistics&part=contentDetails&part=player&part=topicDetails&id=${id}`;
  return axios.get(API_PATH + config);
};
