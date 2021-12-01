import Table from 'react-bootstrap/Table'
import {Button, Row, Col, Spinner} from 'react-bootstrap/'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './QuestionnaireForm.css';
import Axios from "axios";
import { BASE_API_URL } from "../../config/config";
import React, { useState, useEffect  } from 'react';
import { getAccessToken} from "../../auth/Authenticator";

const QuestionnaireAdmin = (props:any) => {
    const [questionnaireList, setQuestionnaireList] = useState<any>(undefined);

    useEffect(() => {
      getQuestionnaires();
    }, []);
  
    const getQuestionnaires= ()=>{
      let accessToken = getAccessToken();
      Axios.get( `${BASE_API_URL}/auth/questionnairelist`, 
        {
          headers: {
            "X-access-token": accessToken
          }
        }).then((d:any) => {
          setQuestionnaireList(d.data);
      });
    }

    return (
        <div id="main_questionnaire">
            <Row>
            {!questionnaireList &&
                <div className = "loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            } 
            <h5>Questionnaire Forms</h5>
            <hr/>
            <Table responsive hover>
                <tbody>
                    { 
                    questionnaireList?.questionnaireList.map((qInfo: any) => {
                          return (
                            <tr key={qInfo["QuestionnaireID"]} >
                              <td>{qInfo["Title"]}</td>
                              <td><Button variant="primary" onClick={() => console.log(questionnaireList)} >View</Button></td>
                              <td><Button variant="success" >Send</Button></td>
                            </tr>
                          )
                        })
                    }
                </tbody>
            </Table>
            </Row>
            <Row>
                <Col>
                    <h6>Pending Questionnaires</h6>
                </Col>
                <Col>
                    <h6>Completed Questionnaires</h6>
                </Col>
            </Row>
        </div>
    )

}

export default QuestionnaireAdmin