import Header from "../components/Header/Header";
import MainRouter from "../routers/MainRouter"


const MainLayout = () => {
  return (
    <main>
      <Header />
      <MainRouter />
    </main>
  )
}

export default MainLayout;