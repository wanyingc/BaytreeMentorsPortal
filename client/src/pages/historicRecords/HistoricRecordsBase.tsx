import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import'./HistoricRecords.css';
import { Form, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { getAccessToken } from "../../auth/Authenticator";
import { BASE_API_URL } from '../../config/config';

import { useHistory } from "react-router-dom";
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';


const RecordsComponent = (props:any) => {

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
    <>
      <div className="container-fluid header-image-historicRec">
        <div className="container p-2">
          <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
              <h5 className="page-title">Historic Records</h5>
          </div>    
        </div>
      </div>
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
              <br/><br/>
              <div className="square square-lg">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  
                  <div className="dashboard-title">{props.sessionTitle}</div>
                </div>
              </div>
              <Table striped bordered hover >
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
                        <tr key={sessionInfo["SessionID"]}
                          onClick={() => {
                              history.push(`/session/` + props.personID + `/` + sessionInfo["SessionID"]); 
                          }}>
                          <td>{sessionInfo["SessionID"]}</td>
                          <td>{sessionInfo["StartDate"]} / {sessionInfo["Duration"]}</td>
                          <td>{sessionInfo["Title"]}</td>
                          <td>{sessionInfo["Type"]}</td>
                          <td>{sessionInfo["Status"]}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
              <div className="text font-weight-light">
                  * To edit sessions, please contact the administrator.<br/><br/>
              </div>

              <div className="square square-lg">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="dashboard-title">{props.questionnaireTitle}</div>
                </div>
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
    </>
  );
}
export default RecordsComponent;

