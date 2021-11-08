import React,{useState, useEffect} from 'react';
import './Sessions.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form';
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
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
  
  
const ReduxFormSelect: any = (field: any) => (
    <Form.Group >
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
      {field.meta.touched && <p>{field.meta.error}</p>}
    </Form.Group>
  );
  
  const ReduxFormInput: any = (field: any) => (
    <Form.Group >
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
  const ReduxFormInputDate: any = (field: any) => (
    <Form.Group>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control 
          {...field.input}
          type="Date" 
          readOnly={field.readOnly}
          placeholder={field.placeholder}
          isInvalid={field.meta.touched && field.meta.error}
          isValid={field.meta.touched && !field.meta.error} />
    </Form.Group>
  );
  const ReduxFormInputTime: any = (field: any) => (
    <Form.Group >
        <Form.Label>{field.label}</Form.Label>
        <Form.Control 
          {...field.input}
          type="Time" 
          readOnly={field.readOnly}
          placeholder={field.placeholder}
          isInvalid={field.meta.touched && field.meta.error}
          isValid={field.meta.touched && !field.meta.error} />
    </Form.Group>
  );
  const ReduxFormInputDuration: any = (field: any) => (
    <Form.Group>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control 
          {...field.input}
          type="Hours" 
          readOnly={field.readOnly}
          placeholder={field.placeholder}
          isInvalid={field.meta.touched && field.meta.error}
          isValid={field.meta.touched && !field.meta.error} />
    </Form.Group>
  );
 const editSession = ()  => {

  return(
          <Form>
          <Container>
          <div className="Header_edit_session">
          <div className="sessionsText_edit">
              <text className="HeaderText_edit">Edit Sessions</text>
          </div>
          </div>
          <Form.Group> 
       
              <div>
                  <h4 >Session Information</h4>
              </div>

         
                <Field name="Date" type="Date" component={ReduxFormInputDate} label="Date of session" placeHolder="Enter Date" />
              
                <Field name="Time" type="Time" component={ReduxFormInputTime} label="Time" placeHolder="Enter Time" />
             
              <Field name="Duration" type="Hours" component={ReduxFormInputDuration} label="Duration" placeHolder="Enter Duration" />
              <Field name="Cancelled"  type="text" component={ReduxFormInput} label="Cancelled" placeHolder="Cancelled?" />
              <Field
                  name="Venue"
                  type="text"
                  options={[
                    { label: 'Venus', value: 'Venus' },
                    { label: 'Mars', value: 'Mars' },
                    { label: 'Earth', value: 'Earth' },
                  ]}
                  component={ReduxFormSelect}
                  label="Venue"
                  placeHolder="Select Venue"
                />
              <Field
                  name="Activity"
                  type="text"
                  options={[
                    { label: 'Academic One to One ', value: 'Academic One to One ' },
                    { label: 'Advocating on beneficiarys behalf', value: 'Advocating on beneficiarys behalf' },
                    { label: 'Befriending', value: 'Befriending' },
                    { label: 'Better off calculation', value: 'Better off calculation' },
                    { label: 'Brexit Support', value: 'Brexit Support' },
                    { label: 'Budgeting', value: 'Budgeting' },
                    { label: 'Case discussion', value: 'Case discussion' },
                    { label: 'Case research', value: 'Case research' },
                    { label: 'Character education session', value: 'Character education session' },
                    { label: 'Christmas party', value: 'Christmas party' },
                    { label: 'Cultural Visit', value: 'Cultural Visit' },
                    { label: 'Discounted travel', value: 'Discounted travel' },
                    { label: 'Distributing Food', value: 'Distributing Food' },
                    { label: 'Drama', value: 'Drama' },
                    { label: 'ESOL Saturdays', value: 'ESOL Saturdays' },
                    { label: 'ESOL Whatsapp chats', value: 'ESOL Whatsapp chats' },
                    { label: 'ESOL class', value: 'ESOL class' },
                    { label: 'Email contact ', value: 'Email contact ' },
                    { label: 'Exhibition', value: 'Exhibition' },
                    { label: 'Event', value: 'Event' },
                    { label: 'Film', value: 'Film' },
                    { label: 'Finance assessment ', value: 'Finance assessment ' },
                    { label: 'Flipgrid', value: 'Flipgrid' },
                    { label: 'Form Filling ', value: 'Form Filling ' },
                    { label: 'Free employment provision', value: 'Free employment provision' },
                    { label: 'Free health care provision', value: 'Free health care provision' },
                    { label: 'Free school meals application', value: 'Free school meals application' },
                    { label: 'Homework support  ', value: 'Homework support ' },
                    { label: 'Housing', value: 'Housing' },
                    { label: 'IT', value: 'IT' },
                    { label: 'Impromptu meeting', value: 'Impromptu meeting' },
                    { label: 'Information, Advice and Guidance', value: 'Information, Advice and Guidance' },
                    { label: 'Internship', value: 'Internship' },
                    { label: 'Interpreting / Translating', value: 'nterpreting / Translating' },
                    { label: 'Into School mentoring', value: 'Into School mentoring' },
                    { label: 'Into School programme', value: 'Into School programme' },
                    { label: 'Issue food bank voucher', value: 'Issue food bank voucher' },
                    { label: 'Laptop Loan', value: 'Laptop Loan' },
                    { label: 'Legacy benefits', value: 'Legacy benefits' },
                   
                  ]}
                  component={ReduxFormSelect}
                  label="Activity"
                  placeHolder="Select Activity"
                />
              <Field name="Staff" type="text" component={ReduxFormInput} label="Staff Incharge" placeHolder="Enter occupation" />
              <Link to="/allSessions" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"center"}} >View All Sessions</Link>
             
             
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
    form: 'editSessionForm',
  })(editSession);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(form);
