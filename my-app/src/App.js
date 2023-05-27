import { Link, Outlet } from "react-router-dom";

export default function App() {
  
  return (
    <div>
      <h1>Ozyegin Bicycle Club Offical Website</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          fontSize: 25 
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/register">Become A Member</Link>
      </nav>
      <Outlet />
    </div>
  );
}

