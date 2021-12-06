import React, { useEffect, useState } from 'react';
import './Messages.css';
import logo from '../../assets/logo192.png';
import { Link, useHistory } from 'react-router-dom';
import getDiscussionList from './DiscussionListData';
import { ListGroup } from 'react-bootstrap';

const columns = [
  {
      dataField: 'header',
      text: 'Header',
      sort: true
  }, {
      dataField: 'firstName',
      text: 'First Name',
      sort: true
  }, {
      dataField: 'lastName',
      text: 'Last Name',
      sort: true
  }, {
      dataField: 'message',
      text: 'Message',
      sort: true
  }, {
      dataField: 'postDate',
      text: 'postDate',
      sort: true
  }
];


type DiscussionDataType = {
  result: DiscussionListObjectType[];
}

type DiscussionListObjectType = {
  header:string;
  firstName:string;
  lastName:string;
  message:string;
  postDate:string;
}

let sampleList: DiscussionListObjectType[] = [
  {
      header: "",
      firstName: "",
      lastName: "",
      message: "",
      postDate: ""
  }
];

const Message = () => {
  const [discussionData, setDiscussionData] = useState<DiscussionDataType>({ result: sampleList});
  const [discussions, setDiscussions] = useState<Object[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if(loading) {
      getDiscussionList().then(res => {
            setDiscussionData(res.data);  
            console.log(res.data);   
            setDiscussions(discussionData.result);
        });
    }

    return () => { setLoading(false)};
})


  return (
    <>
      <div className="container-fluid header-image-discussions">
          <div className="container p-2">
              <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
                  <h5 className="page-title">Discussions</h5>
              </div>    
          </div>
      </div>
      <div className="container">
        <div id="boxes">
          <div className="row">
            <h1 id="title" className="col-md-10">Discussion</h1>
            <Link to="/new-post" className="col-md-1">
              <button className="post btn btn-primary">New Post</button>
            </Link>
          </div>
          <hr id="line"/>


          <div id="message-list">
          <ListGroup id="message-list-group">
          {discussionData.result.map((discussion,index) => (
            <ListGroup.Item key={index} className="messageItem border-3">
              <div>
                <div>
                <img src={logo} id="logo" alt="logo"></img>
                </div>
                <div>
                  <h1 id="messageTitle">{discussion.header}</h1>
                  <p id="messageBody">{discussion.message}</p>
                </div>
                <div>
                  <h2 id="time">{discussion.postDate.substring(0,10)} {discussion.postDate.substring(11,16)}</h2>
                  <p id="name">by {discussion.firstName} {discussion.lastName}</p>
                </div>
              </div>
            </ListGroup.Item>
          ))}
          </ListGroup>
          </div>
        </div>
      </div>
    </>
  )
};

export default Message;
