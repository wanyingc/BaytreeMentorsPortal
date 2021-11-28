import ResetComponent from './ResetPasswordComponent';

function Reset() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-flex col-xl-9 col-md-7 login-image"/>
        <div className="col-xl-3 col-md-5 align-items-center d-flex justify-content-center">
          <ResetComponent/>
        </div>
      </div>
    </div>
  );
}

export default Reset;
