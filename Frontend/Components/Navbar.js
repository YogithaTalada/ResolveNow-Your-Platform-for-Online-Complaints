import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Customer Care Registry
      </Link>
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
