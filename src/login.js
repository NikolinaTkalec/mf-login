import "./login.css";
import { Link, BrowserRouter } from "react-router-dom";
const Login = (props) => {
  return (
    <BrowserRouter>
      <section>
        <div className="container">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <div className="login-info">
            {/* implement login */}
            <Link to="/" className="link">
              <div className="home-icon"></div>
            </Link>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default Login;
