import Header from '../components/Header/Header';
import MainRouter from '../routers/MainRouter';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainRouter />
      </main>
    </>
  );
};

export default MainLayout;
