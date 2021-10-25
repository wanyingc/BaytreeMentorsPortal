import { useState } from "react";
// import { reduxForm, Field } from 'redux-form'
 import { reduxForm } from 'redux-form'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import './QuestionnaireForm.css';

const QuestionnaireForm = () => {

    const [dropdownTitle, setTitle] = useState("Mentee Select")

    //todo: retrieve the mentors mentee list from views
    const [tasks] = useState([
        {
            id: 1,
            mentee: 'Jane Smith',
        },
        {
            id: 2,
            mentee: 'Bob Saget',
        },
        {
            id: 3,
            mentee: 'Jolyne Kujo',
        },

    ])

    const changeValue = (clickEvent: any) => {
        console.log(clickEvent.target.text)
        setTitle(clickEvent.target.text);
    }

    return (
    <Container>
    <Form>
    <h3>Monthly Progress Update</h3>
    <hr />
    <DropdownButton id="mentee-select" title={dropdownTitle} >
        {tasks.map(task => (
    <Dropdown.Item key={task.id} onClick={changeValue}> {task.mentee} </Dropdown.Item>
        ))}
    {/* <Dropdown.Item href="#/action-1">Jane Smith</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Jolyne</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Bob Saget</Dropdown.Item> */}
    </DropdownButton>
    
    <h5>Practical Support</ h5>
    <Form.Group controlId="formPracticalSupport">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee is engaging well with mentory sessions</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="sessionEngagement" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee arrives on time</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="punctuality" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee is willing to engage in activities</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="activityEngagement" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>

    <h5>Social & Emotional Wellbeing</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee feels positive about herself</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteePositvity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee conveys optimism about the future</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee demonstrates independent thinking</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
            <Col md={8} lg={6}>
                <Form.Label>My mentee makes her own mind up about things</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeIndividuality" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
    </Form.Group>
 
    <h5>Relationships, Friends and Family</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee speaks positively about friends</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeFriendPositivity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee sees friends regularly</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee has positive interations with family members</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>

    <h5>Acedmic Progress</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee enjoys learning</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeFriendPositivity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee makes an effort to complete her work</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee has positive attitude towards education</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>

    <br />
    <Button variant="primary" type="button">
      Submit Questionnaire
    </Button>
    <br/>
    <br/>

    
  </Form>
  </Container>
    )
}

export default reduxForm({
    form: 'monthly-questionnaire-form',
})(QuestionnaireForm);


