import { Form, Row, Col, Button} from 'react-bootstrap/';
import Axios from 'axios';
import { BASE_API_URL } from '../../config/config';
import { useEffect, useState } from 'react';
import './NewPost.css'
import { getEmail } from '../../auth/Authenticator';
import { Link } from 'react-router-dom';

const NewPost = () => {

    const [header,setTitle] = useState("");
    const [message,setText] = useState("");
    const email = getEmail();
    const postDate = new Date();


    const postMessage= async() => {
    const response = await Axios.post(`${BASE_API_URL}/discussion`,{
      email: email,
      header: header,
      message: message,
      postDate: postDate
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
      alert('Error retrieving data!');
      return err;
    });
    return response;
  }

    return(
        <div className="mainComponent">
        <Form>
            <Form.Group as={Row} className="title mb-10" controlId="formNotes">
            <Form.Label column sm="2" style={{fontSize: 20}}>Title: </Form.Label>
                <Col sm="10">
                    <Form.Control as="textarea" rows={1} placeholder="Enter the title here..." onChange={e => {setTitle(e.target.value)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="text mb-10" controlId="formNotes">
                <Form.Label column sm="2" style={{fontSize: 20}}>Details: </Form.Label>
                <Col sm="10">
                    <Form.Control as="textarea" rows={10} placeholder="Enter the message here..." onChange={e => {setText(e.target.value)}} />
                </Col>
            </Form.Group>
        </Form>

        <div className="buttons row text-center">
            <div className="col-md-6">
                <Link to="/messages">
                    <Button variant="" className="post-button"  onClick={postMessage}>
                        Post
                    </Button>
                </Link>
            </div>
            <div className="col-md-6">
                <Link to="/messages">
                    <Button variant="" className="cancel-button" >
                        Cancel
                    </Button>
                </Link> 
            </div>
        </div>

        </div>
    )
}

export default NewPost;
