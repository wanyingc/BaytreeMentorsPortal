import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import { Form, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { getAccessToken, getPersonID } from "../../auth/Authenticator";
import { BASE_API_URL } from '../../config/config';

import { useHistory } from "react-router-dom";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';


const MentorQuestionnaires = (props:any) => {
  const personID = getPersonID();
  const [mentorRecords, setMentorRecords] = useState<any>(undefined);
  const history = useHistory();

  useEffect(() => {
    getMentorRecords();
  }, []);

  const getMentorRecords= ()=>{
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
        console.log(d.data)
        setMentorRecords(d.data);
    });
  }

  return (
    <Container>

      {!mentorRecords &&
        <div className = "loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }  

          <h2>My Questionnaires</h2>
          <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Questionnaire</th>
          </tr>
        </thead>
        <tbody>
          {mentorRecords?.questionnaires.map((qInfo: any) => {
            return (
              <tr key={qInfo["QuestionnaireID"]}
              onClick={() => {
                  history.push(`/questionnaire-form/`); 
              }}>
                <td>{qInfo["QuestionnaireID"]}</td>
                <td>{qInfo["Date"]}</td>
                <td>{qInfo["EntityNiceName"]}</td>
                <td>{qInfo["EntityType"]}</td>
                <td>{qInfo["Questionnaire"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
export default MentorQuestionnaires;