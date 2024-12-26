import { NavLink } from "react-router-dom"


export const Home = () => {
  return (
    <section>
      <div>
        <h1>
          Campers of your dreams
        </h1>
        <h2> You can find everything you want in our catalog</h2>
        <NavLink to="/vehicles">View Now</NavLink>
      </div>
    </section>
  )
}
