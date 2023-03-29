import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
