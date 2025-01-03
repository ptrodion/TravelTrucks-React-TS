import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Vehicles = lazy(() => import('../pages/Vehicles/Vehicles'));
const Vehicle = lazy(() => import('../pages/Vehicle/Vehicle'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const MainRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<Vehicle />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
