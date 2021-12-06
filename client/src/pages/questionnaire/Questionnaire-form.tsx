import { useState } from "react";
import { reduxForm } from 'redux-form'
import Form from 'react-bootstrap/Form'
import { Container, Col, Row, Button, ToggleButton, ToggleButtonGroup} from "react-bootstrap/"
import './QuestionnaireForm.css';

const QuestionnaireForm = () => {

    const onFormSubmit = (e : any) => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())

        // todo: pass inputs to backend
            console.log(formDataObj)
      }

    //todo: retrieve the mentors mentee list from views
    const [mentees] = useState([
        {
            id: 1,
            name: 'Jane Smith',
        },
        {
            id: 2,
            name: 'Bob Saget',
        },
        {
            id: 3,
            name: 'Jolyne Kujo',
        },

    ])

    return (
    <Container>
    <Form onSubmit={onFormSubmit}>
    <div className="square square-lg">  
      <h2 className="dashboard-title">Monthly Progress Update</h2>
    </div>

    <Form.Group controlId="mentee-name"> 
        <Row>
            <Col sm={5} md={4} lg={3}>
                <Form.Control as="select" name="names" placeholder="Stuff">
                    <option>Select a mentee</option>
                    {mentees.map(mentee => (
                    <option key={mentee.id} value={mentee.name}> {mentee.name} </option>
                        ))}
                </Form.Control>
            </Col>
        </Row>
    </Form.Group>

    <h5>Practical Support</ h5>
    <Form.Group controlId="practical-support">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee is engaging well with mentory sessions</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="session-engagement" >
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
                <ToggleButtonGroup type="radio" name="activity-engagement" >
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
    <Form.Group controlId="well-being">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee feels positive about herself</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="mentee-positvity" >
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
            <ToggleButtonGroup type="radio" name="mentee-optimism" >
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
                <ToggleButtonGroup type="radio" name="mentee-thinking" >
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
    <Form.Group controlId="relationships">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee speaks positively about friends</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="friend-positivity" >
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
            <ToggleButtonGroup type="radio" name="friend-frequency" >
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
                <ToggleButtonGroup type="radio" name="family-positivity" >
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

    <h5>Academic Progress</ h5>
    <Form.Group controlId="academics">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee enjoys learning</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="learning-enjoyment" >
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
            <ToggleButtonGroup type="radio" name="work-effort" >
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
                <ToggleButtonGroup type="radio" name="education-attiude" >
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
    <Button variant="primary" type="submit">
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


