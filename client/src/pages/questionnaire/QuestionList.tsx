import Table from 'react-bootstrap/Table'
import {Button, Row, Spinner} from 'react-bootstrap/'
import './QuestionnaireForm.css';
import Axios from "axios";
import { BASE_API_URL } from "../../config/config";
import React, { useState, useEffect  } from 'react';
import { getAccessToken} from "../../auth/Authenticator";
import { useParams } from "react-router-dom";

const QuestionnaireAdminShow = (props:any) => {
    const [questionsList, setQuestionsList] = useState<any>(undefined);
    const { questionnaireID } = useParams<any>();

    useEffect(() => {
        getQuestions();
      }, []);
    
      const getQuestions= ()=>{
        let accessToken = getAccessToken();
        Axios.post( 
          `${BASE_API_URL}/auth/questionlist`,
          {
            questionnaireID: questionnaireID,
          },
          {
            headers: {
              "X-access-token": accessToken
            }
          }).then((d:any) => {
            setQuestionsList(d.data);
        });
      }

    return (
      <div className="container">
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
                    <thead>
                      <th>Question</th>
                      <th>Type</th>
                    </thead>
                    <tbody>
                        { 
                        questionsList?.questionsList.map((qInfo) => {
                              return (
                                <tr key={qInfo["QuestionID"]} >
                                  <td>{qInfo["Question"]}</td>
                                  <td>{qInfo["inputType"]}</td>
                                </tr>
                              )
                            })
                        }
                    </tbody>
                </Table>
                </Row>
               {/* <Row>
                <td><Button variant="success" onClick={()=>console.log(typeof(questionsList))} >Send</Button></td>
                </Row> */}
            </div>
          </div>
        )
    

}

export default QuestionnaireAdminShow