import Table from 'react-bootstrap/Table'
import {Button, Row, Col, Spinner} from 'react-bootstrap/'
import './QuestionnaireForm.css';
import Axios from "axios";
import { BASE_API_URL } from "../../config/config";
import React, { useState, useEffect  } from 'react';
import { getAccessToken} from "../../auth/Authenticator";

const QuestionnaireAdminShow = (props:any) => {
    const [questionsList, setQuestionsList] = useState<any>(undefined);

    useEffect(() => {
        getQuestions();
      }, []);
    
      const getQuestions= ()=>{
        let accessToken = getAccessToken();
        Axios.get( `${BASE_API_URL}/auth/questionlist`, 
          {
            headers: {
              "X-access-token": accessToken
            }
          }).then((d:any) => {
            setQuestionsList(d.data);
        });
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
                <h5>Questions</h5>
                <hr/>
                <Table responsive hover>
                    <tbody>
                        { 
                        questionsList?.questionsList.map((qInfo) => {
                              return (
                                <tr key={qInfo["QuestionID"]} >
                                  <td>{qInfo["Question"]}</td>
                                  <td>{qInfo["inputType"]}</td>
                                  <td>{qInfo["validation"]}</td>
                                </tr>
                              )
                            })
                        }
                    </tbody>
                </Table>
                </Row>
            </div>
        )
    

}

export default QuestionnaireAdminShow