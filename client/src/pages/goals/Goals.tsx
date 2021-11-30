import './goals.css';
import { Form, Row, Col, ListGroup, Button } from 'react-bootstrap/';
import { goalsList } from './GoalsData';

const Goals = () => {

    return (
      <div className="container">
        <div className="row">
          <h2 className="page-title">Goals</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <ListGroup data-spy="scroll">
              {goalsList.map(goals => (
                <ListGroup.Item key={goals.id}>
                  <p className="lead"><strong>{goals.mentee}, {goals.date}</strong></p>
                  <p>{goals.notes}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>

          </div>

        </div>
      </div>
    );
}

export default Goals;