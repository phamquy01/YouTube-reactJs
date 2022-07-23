import LoadablePage from '@/components/_share/load/Loadable';
import ConstantList from '../config/AppConst';

const routes = [
  {
    path: ConstantList.ROOT_PATH,
    element: LoadablePage({
      loader: () => import('@/components/screens/page/Home'),
    }),
  },
  {
    path: ConstantList.ROOT_PATH + 'watch/:id',
    element: LoadablePage({
      loader: () => import('@/components/screens/page/Details'),
    }),
    layout: 'detail',
  },
  {
    path: ConstantList.ROOT_PATH + 'result',
    element: LoadablePage({
      loader: () => import('@/components/screens/page/SearchPage'),
    }),
  },
  {
    path: ConstantList.ROOT_PATH + 'session/404',
    element: LoadablePage({
      loader: () => import('../components/screens/error/Error'),
    }),
  },
];

export default routes;
