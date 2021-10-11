import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import { Button } from "react-bootstrap";

const DEFAULT_USER = {
  fname: 'Cagla',
  lname: 'Ist',
  phone: '14252412222',
  email: 'cagla@ist.com',
  occupation: 'Teacher',
  address: 'The Baytree Centre, 300-302 Brixton Rd',
  city: 'London',
  postalCode: 'SW9 6AE',
  country: 'UK',
  mentorType: 'Youth Mentor',
  profileImg: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
};
const ReduxFormSelect: any = (field: any) => (
  <Form.Group className="mb-3">
    <Form.Label>{field.label}</Form.Label>
    <Form.Control as="select" {...field.input} disabled={field.disabled}>
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
  console.log(props);

  const userInfo = props.apiForm && props.apiForm.ProfileForm && props.apiForm.ProfileForm.values;

  return (
    <Form>
    <Container>
      <Row>
        <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src={userInfo && userInfo.profileImg}/>
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
              <Field name="email" type="text" component={ReduxFormInput} label="Email" placeHolder="Enter email" />
              <Field name="occupation" type="text" component={ReduxFormInput} label="Occupation" placeHolder="Enter occupation" />
              <Field name="address" type="text" component={ReduxFormInput} label="Address" placeHolder="Enter address" />
              
              <Col sm={6}>
                <Field name="country" type="text" component={ReduxFormInput} label="Country" placeHolder="Enter country" />
              </Col>
              <Col sm={6}>
                <Field name="postalCode" type="text" component={ReduxFormInput} label="Postal Code" placeHolder="Enter postal code" />
              </Col>

              <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Mentor Settings</h4>
              </div>

              {/* <Field name="mentorType" type="text" component={ReduxFormInput} label="Mentor Type" placeHolder="enter mentor type" /> */}
              <Field
                  name="mentorType"
                  type="text"
                  options={[
                    { label: 'Youth Mentor', value: 'Youth Mentor' },
                    { label: 'Into School Mentor', value: 'Into School Mentor' },
                    { label: 'Women Mentor', value: 'Women Mentor' },
                  ]}
                  component={ReduxFormSelect}
                  label="Mentor Type"
                  placeHolder="Select mentor type"
                />
            </Row>

            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: '20px', float: "right" }}
              disabled={props.pristine || props.submitting}
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
