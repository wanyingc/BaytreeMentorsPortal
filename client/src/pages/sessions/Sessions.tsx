import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { getAccessToken } from "../../auth/Authenticator";
import { BASE_API_URL } from '../../config/config';
import './Sessions.css'
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


// type sessionDataType = {
//   result: sessionListObjectType[];
// }

// type sessionListObjectType = {
//   Duration: string,
//   ParticipantID: number,
//   SessionGroupID: string,
//   SessionID: string,
//   StartDate: Date|string,
//   Status: string,
//   Title: string,
//   Type: string
// }

// let sampleSession: sessionListObjectType[] = [
//   {
//     Duration: "",
//     ParticipantID: 0,
//     SessionGroupID: "",
//     SessionID: "",
//     StartDate: "",
//     Status: "",
//     Title: "",
//     Type: ""
//   }
// ];



const Session = ()  => {

  const personObject = useParams<any>();

  const personID = parseInt(personObject.personID);
  const sessionID = personObject.SessionID

  const [sessionRecords, setSessionRecords] = useState<any>([]);

  console.log(typeof personObject.SessionID)
  console.log(personObject);

  useEffect(() => {
    getSessionRecords();
  }, []);

  const getSessionRecords = () => {
    let accessToken = getAccessToken();
    Axios.post(
      `${BASE_API_URL}/auth/records`, 
      {
        personID: personID,
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }).then((d:any) => {
        setSessionRecords(d.data.sessions);
    });
  }
  console.log("below me is sessionRecords");
  console.log(sessionRecords);



  let sessionFromID = sessionRecords.find(obj => obj.SessionID === sessionID);
  console.log(sessionFromID);
  return(
    <Container>
      <Form>
        <h4>Sessions Report</h4>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly type="Date" placeholder="" />
        </Form.Group>
      </Form>
    </Container>







          // <Form>
          // <Container>
          // <div className="Header_main_session_page">
          // <div className="sessionsText">
          //     <text className="HeaderText_main_session_page">Sessions Report</text>
          // </div>
          // </div>
          // <Form.Group controlId="session-name"> 

          //     <div className="d-flex justify-content-between align-items-center mb-3">
          //         <h4 className="text-right">Session Information</h4>
          //     </div>

  
          //       <Field name="Date" readOnly type="text" component={ReduxFormInput} label="Date of session" placeHolder="Enter Date" />
     
          
          //       <Field name="Time" readOnly type="text" component={ReduxFormInput} label="Time" placeHolder="Enter Time" />
            
          //     <Field name="Duration" readOnly type="text" component={ReduxFormInput} label="Duration" placeHolder="Enter Duration" />
          //     <Field name="Cancelled" readOnly type="text" component={ReduxFormInput} label="Cancelled" placeHolder="Cancelled?" />
          //     <Field name="Venue" readOnly type="text" component={ReduxFormInput} label="Venue" placeHolder="Enter venue" />
          //     <Field name="Activity" readOnly type="text" component={ReduxFormInput} label="Acitvity" placeHolder="Enter activity" />
          //     <Field name="Staff" readOnly type="text" component={ReduxFormInput} label="Staff Incharge" placeHolder="Enter occupation" />
          //     <Link to="/editSessions" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"center"}} >Edit Sessions</Link>
          //     <Link to="/notes" className="btn btn-primary" style={{width: '500px', margin:"10px", alignItems:"end"}} >View Sessions Notes</Link>
    
  
          // </Form.Group>

          // </Container>
          // </Form>
    
  );
}
export default Session;

