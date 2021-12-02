import Table from 'react-bootstrap/Table'
import {Button, Row, Col, Spinner} from 'react-bootstrap/'
import './QuestionnaireForm.css';
import Axios from "axios";
import { BASE_API_URL } from "../../config/config";
import React, { useState, useEffect  } from 'react';
import { getAccessToken} from "../../auth/Authenticator";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const QuestionnaireAdmin = (props:any) => {
    const [questionnaireList, setQuestionnaireList] = useState<any>(undefined);
    const [mentors, setMentors] = useState<Object[]>([]);
    const [modalShow, setModalShow] = useState(false)
    const [questionnaireID, setquestionnaireID] = useState(-1)
    const history = useHistory();

    useEffect(() => {
      getMentorList();
      getQuestionnaires();
    }, []);
    
    const getMentorList = () => {
      let accessToken = getAccessToken();
      Axios.get(`${BASE_API_URL}/auth/admin/mentorlist`,
      {
          headers: {
              "X-access-token": accessToken
          }
      }).then((d:any) => {
        setMentors(d.data.result)
      });
    }

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

    const sendQuestionnaire = (qID: any) => {
      setquestionnaireID(qID)
      setModalShow(true)
    }

    const onFormSubmit = (e : any) => {
      let accessToken = getAccessToken();
      e.preventDefault()
      const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
      
      const mentorID = formDataObj["names"]
        
      console.log(mentorID)
      console.log(typeof(mentorID))

      // Axios.post( 
      //   `${BASE_API_URL}/auth/questionnairelist`,
      //   {
      //     questionnaireID: questionnaireID,
      //   },
      //   {
      //     headers: {
      //       "X-access-token": accessToken
      //     }
      // });
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
                              <td><Button variant="primary" onClick={()=> history.push("/questions/"+qInfo['QuestionnaireID'])} >View</Button></td>
                              <td><Button variant="success" onClick={() => sendQuestionnaire(qInfo["QuestionnaireID"])} >Send</Button></td>
                            </tr>
                          )
                        })
                    }
                </tbody>
            </Table>
            </Row>
            <Modal show={modalShow}  size="lg" centered onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Send Questionnaire </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="modalDiv">
                    <Form onSubmit={onFormSubmit}> 
                      <Row>
                          <Form.Control as="select" name="names" placeholder="Stuff">
                              <option value="-1">Select a mentor</option>
                              {mentors.map(mentor => (
                                <option key={mentor["personID"]} value={mentor["personID"]}> {mentor["fistName"]} {mentor["lastName"]} </option>
                              ))}
                          </Form.Control>
                      </Row>
                      <br />
                      <br />
                      <Row>
                      <Button variant="success" type="submit" onClick={() => console.log(mentors)} >Send</Button>
                      </Row>
                      </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default QuestionnaireAdmin