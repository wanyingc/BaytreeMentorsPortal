import ForgotComponent from './ForgotPasswordComponent';

function Forgot() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-flex col-xl-9 col-md-7 login-image"/>
        <div className="col-xl-3 col-md-5 align-items-center d-flex justify-content-center">
          <ForgotComponent/>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
