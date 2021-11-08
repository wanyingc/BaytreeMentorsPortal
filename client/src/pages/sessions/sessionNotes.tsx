import React,{useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import BootstrapTable from 'react-bootstrap-table-next';
import { render } from 'react-dom';
import { bindActionCreators } from "redux";
import './AllSessions.css'
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const secondNov = {
    Date: '02 / 11 / 2021',
    Time: '12:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',
    notes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  };
  const thirdNov = {
    Date: '03 / 11 / 2021',
    Time: '14:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',
    notes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


  };
  const fourthNov = {
    Date: '04 / 11 / 2021',
    Time: '05:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',
    notes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


  };
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

 const sessionNotes = ()  => {
    
             return(
          <Form>
          <Container>
          <div className="Header_notes_session">
          <div className="sessionsText_notes">
              <text className="HeaderText_session_notes">Session Notes</text>
              </div>
              </div>
                <div className="SessionNotes">
            <text>Volunteer Session held on November 2</text>
           <div>
           <Field name="notes"  type="text" component={ReduxFormInput} label="Notes" placeHolder="Enter Notes" ></Field></div>
           <Link to="/sessions" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"center"}} >Save Notes</Link>
          </div>
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
                form: 'SessionNotesForm',
              })(sessionNotes);
              
              export default connect(
                mapStateToProps,
                mapDispatchToProps
              )(form);