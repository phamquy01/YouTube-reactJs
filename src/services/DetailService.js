import axios from 'axios';
import ConstantList from '../config/AppConst';

const API_PATH_LIST_VIDEO =
  ConstantList.API_ENDPOINT + 'search?' + ConstantList.API_KEY;
const API_PATH_LIST_VIEW =
  ConstantList.API_ENDPOINT + 'videos?' + ConstantList.API_KEY;

export const getVideoSuggest = (idvideo) => {
  let config = `&part=snippet&maxResults=50&relatedToVideoId=${idvideo}&type=video`;
  return axios.get(API_PATH_LIST_VIDEO + config);
};

export const getVideoDetail = (idvideo) => {
  let config = `&part=snippet&part=statistics&part=contentDetails&part=player&part=topicDetails&id=${idvideo}`;
  return axios.get(API_PATH_LIST_VIEW + config);
};
