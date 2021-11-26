import Table from 'react-bootstrap/Table'
import {Button, Row, Col, Spinner} from 'react-bootstrap/'
import './QuestionnaireForm.css';
import Axios from "axios";
import { BASE_API_URL } from "../../config/config";
import React, { useState, useEffect  } from 'react';
import { getAccessToken} from "../../auth/Authenticator";

const QuestionnaireAdminShow = (props:any) => {
    const [questionsList, setQuestionsList] = useState<any>(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getQuestions();
      }, []);
    
      const getQuestions= ()=>{
        setLoading(true);
        let accessToken = getAccessToken();
        Axios.get( `${BASE_API_URL}/auth/questionlist`, 
          {
            headers: {
              "X-access-token": accessToken
            }
          }).then((d:any) => {
            setQuestionsList(d.data);
        }).finally(() => {
            setLoading(false);
          });
      }

    if (loading) {
        return <p>Data is loading...</p>;
    }

    function test() {
        return (
            <Table responsive hover>
            <tbody>
                { 
                questionsList?.questionsList.map((qInfo: any) => {
                      return (
                        <tr key={qInfo["QuestionID"]} >
                          <td>{qInfo["Question"]}</td>
                        </tr>
                      )
                    })
                }
            </tbody>
        </Table>
        )
    }

    return (
            <div id="main_questionnaire">
                <Row>
                {!questionsList &&
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
                        <tr>
                        <td><Button variant="primary" onClick={() => console.log(questionsList)}>View</Button></td>
                        </tr>
                        { 
                        // questionsList?.questionsList.map((qInfo) => {
                        //       return (
                        //         <tr key={qInfo["QuestionID"]} >
                        //           <td>{qInfo["Question"]}</td>
                        //         </tr>
                        //       )
                        //     })
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

export default QuestionnaireAdminShow