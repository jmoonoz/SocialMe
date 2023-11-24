import React from "react";
import "../../style/register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            deleniti facere quas exercitationem odit. Esse explicabo corporis,
            consequuntur unde placeat quis porro ipsam rerum, omnis modi dicta
            nesciunt voluptates ad.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Passwords" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
