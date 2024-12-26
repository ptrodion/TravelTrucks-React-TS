import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"


const MainRouter = () => {
  return (
    <Suspense fallback={<div> Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={"Vehicles Page"} />
        <Route path="/vehicles/:id" element={"Vehicles id Page"} />
        <Route path="/not-found" element={"Not Found"} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </Suspense>
  )
}

export default MainRouter