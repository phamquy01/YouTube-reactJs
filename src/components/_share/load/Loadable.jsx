import loadable from 'react-loadable';
import Loading from './Loading';

const LoadablePage = (param) => {
  return loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 1000,
        timeout: 10000,
      },
      param,
    ),
  );
};
export default LoadablePage;
