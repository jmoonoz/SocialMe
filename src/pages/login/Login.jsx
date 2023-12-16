import { useContext } from "react";
import "../../style/login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            deleniti facere quas exercitationem odit. Esse explicabo corporis,
            consequuntur unde placeat quis porro ipsam rerum, omnis modi dicta
            nesciunt voluptates ad.
          </p>
          <span>Dont have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
