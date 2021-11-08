import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import'../records/Records.css';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { getAccessToken} from "../../auth/Authenticator";
import {
  useParams
} from "react-router-dom";
const RecordsComponent = (props:any) => {

  const [mentorRecords, setMentorRecords] = useState<any>(undefined);

  useEffect(() => {
    getMentorRecords();
  }, []);

  const getMentorRecords= ()=>{
    let accessToken = getAccessToken();
    Axios.post(
      "http://localhost:8080/auth/records", 
      {
        personID: props.personID,
      },
      {
        headers: {
          "X-access-token": accessToken
        }
      }).then((d:any) => {
        setMentorRecords(d.data);
    });
  }

  return (    
    <Container>  
      <Row> 
        <Col md={1}></Col>
        <Col md={10} lg={10}>

          {!mentorRecords &&
            <div className = "loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          }   
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-center">{props.sessionsTitle}</h4>
              </div>
                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Session ID</th>
                        <th>Date / Duration</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      { 
                        mentorRecords?.sessions.map((sessionInfo: any) => {
                          return (
                            <tr key={sessionInfo["SessionID"]} >
                              <td>{sessionInfo["SessionID"]}</td>
                              <td>{sessionInfo["StartDate"]} / {sessionInfo["Duration"]}</td>
                              <td>{sessionInfo["Title"]}</td>
                              <td>{sessionInfo["Type"]}</td>
                              <td>{sessionInfo["Status"]}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-center">{props.questionnaireTitle}</h4>
                  </div>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Questionnaire ID</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Questionnaire</th>
                      </tr>
                    </thead>
                    <tbody>
                      { 
                        mentorRecords?.questionnaires.map((qInfo: any) => {
                          return (
                            <tr key={qInfo["QuestionnaireID"]}>
                              <td>{qInfo["QuestionnaireID"]}</td>
                              <td>{qInfo["Date"]}</td>
                              <td>{qInfo["EntityNiceName"]}</td>
                              <td>{qInfo["EntityType"]}</td>
                              <td>{qInfo["Questionnaire"]}</td>
                              
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
            </div>
      </Col>
      </Row>   
    </Container>  
  );
}
export default RecordsComponent;

