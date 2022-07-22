import { Fragment } from 'react';
import routes from './router.config';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Youtube from '@/screens/Youtube';

function RootRouter() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const LayoutGenneral = route.layout === 'detail' ? Fragment : Youtube;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <LayoutGenneral>
                <route.element />
              </LayoutGenneral>
            }
          />
        );
      })}
    </Routes>
  );
}

export default RootRouter;
