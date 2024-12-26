import { Route, Routes } from "react-router-dom"


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={"Home Page"} />
      <Route path="/vehicles" element={"Vehicles Page"} />
      <Route path="/vehicles/:id" element={"Vehicles id Page"} />
    </Routes>
  )
}

export default MainRouter