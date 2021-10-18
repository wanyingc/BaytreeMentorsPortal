import './Login.css';
import LoginComponent from './LoginComponent';

function Login() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-flex col-xl-9 col-md-7 login-image"/>
        <div className="col-xl-3 col-md-5 align-items-center d-flex justify-content-center">
          <LoginComponent/>
        </div>
      </div>
    </div>
  );
}

export default Login;
