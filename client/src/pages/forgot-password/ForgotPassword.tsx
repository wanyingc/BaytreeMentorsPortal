import ForgotComponent from './ForgotPasswordComponent';

function Forgot() {

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="login-image align-items-center">
        <div className=" col-md-6 offset-md-3 align-self-center d-flex justify-content-center background-color-light p-3 mb-2 bg-white rounded mt-4 opacity- 15">
          <ForgotComponent/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Forgot;
