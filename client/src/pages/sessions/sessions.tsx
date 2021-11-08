import React,{useState, useEffect} from 'react';
import './Sessions.css'
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import Headerimg from './images/image-header.jpg'
import { Link } from 'react-router-dom';

const secondNov = {
    Date: '02 / 11 / 2021',
    Time: '12:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const thirdNov = {
    Date: '03 / 11 / 2021',
    Time: '14:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const fourthNov = {
    Date: '04 / 11 / 2021',
    Time: '05:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const sessionList=[secondNov,thirdNov,fourthNov];
  
  const ReduxFormInput: any = (field: any) => (
    <Form.Group>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control 
          {...field.input}
          type="Text" 
          readOnly={field.readOnly}
          placeholder={field.placeholder}
          isInvalid={field.meta.touched && field.meta.error}
          isValid={field.meta.touched && !field.meta.error} />
    </Form.Group>
  );
 const Session = ()  => {

  return(
          <Form>
          <Container>
          <div className="Header">
          <div className="sessionsText">
              <text className="HeaderText">Sessions Report</text>
          </div>
          </div>
          <Form.Group controlId="session-name"> 

              <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Session Information</h4>
              </div>

  
                <Field name="Date" readOnly type="text" component={ReduxFormInput} label="Date of session" placeHolder="Enter Date" />
    
          
                <Field name="Time" readOnly type="text" component={ReduxFormInput} label="Time" placeHolder="Enter Time" />
            
              <Field name="Duration" readOnly type="text" component={ReduxFormInput} label="Duration" placeHolder="Enter Duration" />
              <Field name="Cancelled" readOnly type="text" component={ReduxFormInput} label="Cancelled" placeHolder="Cancelled?" />
              <Field name="Venue" readOnly type="text" component={ReduxFormInput} label="Venue" placeHolder="Enter venue" />
              <Field name="Activity" readOnly type="text" component={ReduxFormInput} label="Acitvity" placeHolder="Enter activity" />
              <Field name="Staff" readOnly type="text" component={ReduxFormInput} label="Staff Incharge" placeHolder="Enter occupation" />
              <Link to="/editSessions" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"center"}} >Edit Sessions</Link>
              <Link to="/notes" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"end"}} >View Sessions Notes</Link>
    
  
    </Form.Group>

          </Container>
          </Form>
    
  );

}
const mapStateToProps = (state: { form: any, profile: any; }) => {
    return {
      apiForm: state.form,
      initialValues: secondNov
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
    form: 'SessionForm',
  })(Session);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(form);