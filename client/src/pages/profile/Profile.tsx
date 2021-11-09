import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import { Button, Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { getAccessToken, isAdmin, getPersonID} from "../../auth/Authenticator";
import Axios from "axios";
import'../records/Records.css';

const DEFAULT_USER = {
  profileImg: 'https://merodesk.com/wp-content/uploads/2021/05/user-4.png'
};

const ReduxFormSelect: any = (field: any) => (
  <Form.Group className="mb-3">
    <Form.Label>{field.label}</Form.Label>
    <Form.Control as="select" {...field.input} disabled={field.disabled} >
      <option value="" disabled={true}>
        {field.placeHolder}
      </option>
      {field.options.map((data: any, i: number) => {
        return (
          <option key={i} value={data.value}>
            {data.label}
          </option>
        );
      })}
    </Form.Control>
    {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
  </Form.Group>
);

const ReduxFormInput: any = (field: any) => (
  <Form.Group className="mb-3">
      <Form.Label>{field.label}</Form.Label>
      <Form.Control 
        {...field.input}
        type="text" 
        readOnly={field.readOnly}
        placeholder={field.placeholder}
        isInvalid={field.meta.touched && field.meta.error}
        isValid={field.meta.touched && !field.meta.error} />
  </Form.Group>
);

const validate = (values: any): FormErrors<any> => {
  const errors: FormErrors<any> = {};
  if (!values.fname) {
    errors.fname = 'First name required';
  }

  return errors;
};

function Profile(props: InjectedFormProps | any) {
  const [dataLoaded, setDataLoaded] = useState<any>(undefined);
  const userInfo = props.apiForm && props.apiForm.ProfileForm && props.apiForm.ProfileForm.values;

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile= ()=>{
    let accessToken = getAccessToken();
    let personID = getPersonID();
    Axios.post(
      "http://cmpt373-1217-04.cmpt.sfu.ca:8080/auth/profile", 
      {
        personID: personID,
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }).then((d:any) => {
        props.change('fname',d.data.name);
        props.change('lname',d.data.surname);
        props.change('phone',d.data.phone);
        props.change('email',d.data.email);
        props.change('occupation',d.data.occupation);
        props.change('mentorType',d.data.type);
        setDataLoaded(true);
    });
  }

  return (
    <Form>
    <Container>
      <Row>
      {!dataLoaded &&
            <div className = "loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          } 
        <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src={DEFAULT_USER.profileImg}/>
                <span className="font-weight-bold">{userInfo && userInfo.fname}</span>
                <span className="text-black-50">{userInfo && userInfo.email}</span>
                <span> </span>
            </div>
        </Col>
        <Col md={9} lg={6}>
            <Row>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
              </div>

              <Col md={6}>
                <Field name="fname" type="text" component={ReduxFormInput} label="First Name" placeHolder="Enter first name" />
              </Col>
              <Col md={6}>
                <Field name="lname" type="text" component={ReduxFormInput} label="Last Name" placeHolder="Enter last name" />
              </Col>

              <Field name="phone" readOnly type="text" component={ReduxFormInput} label="Phone Number" placeHolder="Enter phone number" />
              <Field name="email" readOnly type="text" component={ReduxFormInput} label="Email" placeHolder="Enter email" />
              <Field name="occupation" type="text" component={ReduxFormInput} label="Occupation" placeHolder="Enter occupation" />

              {/* <Field name="mentorType" type="text" component={ReduxFormInput} label="Mentor Type" placeHolder="enter mentor type" /> */}
              <Field
                  name="mentorType"
                  type="text"
                  disabled
                  options={[
                    { label: 'Youth Mentor', value: 'Youth Mentor' },
                    { label: 'Into School Mentor', value: 'Into School Mentor' },
                    { label: 'Women Mentor', value: 'Women Mentor' },
                  ]}
                  component={ReduxFormSelect}
                  label="Mentor Type"
                  placeHolder="Select mentor type"
                />

              <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Mentee Information</h4>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sally</td>
                    <td>Otto</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jass</td>
                    <td>Thornton</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jen</td>
                    <td>Thornton</td>
                    <td>17</td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: '20px', marginTop:'48px', marginBottom:'48px', float: "right" }}
              //will be changed after confirming saving options(Views app) or will make all the fieds readonly
              disabled= {true}//props.pristine || props.submitting}
            >
              Save Profile
            </Button>
        </Col>
      </Row>
    </Container>
    </Form>
  );
}

const mapStateToProps = (state: { form: any, profile: any; }) => {
  return {
    apiForm: state.form,
    initialValues: DEFAULT_USER
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

const form = reduxForm<{}, any>({
  form: 'ProfileForm',
  validate,
})(Profile);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(form);
