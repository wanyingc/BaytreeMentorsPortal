import React,{useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "react-bootstrap/Form";
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form';
import { Button } from 'react-bootstrap';


 
 const createDiscussion = ()  => {

  return(
          <Form>
          <Container>
          <Form.Group> 
              <div>
                  <h4 >Create Discussion</h4>
              </div>
              <Form.Group className="mb-3">
              <Form.Label>Please Enter Yopur E-mail</Form.Label>
              <Form.Control as="textarea" rows={1}/>
              <Form.Label>Please Enter The Title</Form.Label>
              <Form.Control as="textarea" rows={1}/>
              <Form.Label>Please Enter your text</Form.Label>
              <Form.Control as="textarea" rows={12}/>
              
            </Form.Group>
            
            <Button
              className="mb-3"
              type="submit"
            >
              Add Session
            </Button>
    </Form.Group>
          </Container>
          </Form>
        
  );

} 

  
  
  export default createDiscussion;
