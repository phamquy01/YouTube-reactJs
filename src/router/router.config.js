// import Details from '@/screens/Details';
// import Home from '@screens/Home';
// import SearchPage from '@/screens/SearchPage';
// import Error from '@/components/_share/Error';
import ConstantList from '../config/AppConst';
import LoadablePage from '@/components/_share/Loadable';

const routes = [
  {
    path: ConstantList.ROOT_PATH,
    element: LoadablePage({
      loader: () => import('@/components/screens/home/Home'),
    }),
  },
  {
    path: ConstantList.ROOT_PATH + 'watch/:id',
    element: LoadablePage({
      loader: () => import('@/components/screens/detail/Details'),
    }),
    layout: 'detail',
  },
  {
    path: ConstantList.ROOT_PATH + 'result',
    element: LoadablePage({
      loader: () => import('@/components/screens/search/SearchPage'),
    }),
  },
  {
    path: ConstantList.ROOT_PATH + 'session/404',
    element: LoadablePage({
      loader: () => import('../components/_share/Error'),
    }),
  },
];

export default routes;
