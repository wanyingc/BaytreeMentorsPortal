import React, { useEffect, useState } from 'react';
import './Messages.css';
import logo from '../../assets/logo192.png';
import { Link, useHistory } from 'react-router-dom';
import getDiscussionList from './DiscussionListData';

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
  postDate:Date|string;
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
  const [discussion, setDiscussion] = useState<Object[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if(loading) {
      getDiscussionList().then(res => {
            setDiscussionData(res.data);        
            setDiscussion(discussionData.result);
        });
    }

    return () => { setLoading(false)};
});

  return (
  <div id="boxes">
    <div className="row">
      <h1 id="title" className="col-md-10">Discussion</h1>
      <Link to="/new-post" className="col-md-1">
        <button className="post btn btn-primary">New Post</button>
      </Link>
    </div>
	  <hr id="line"/>


    <div id="message-list">
      <button id="message">
        <div>
          <div>
          <img src={logo} id="logo" alt="logo"></img>

          </div>
          <div>
            <h1 id="messageTitle">Message Title</h1>
            <p id="messageBody">This is the body of the message.</p>
          </div>
          <div>
            <h2 id="time">{new Date().toLocaleDateString()}</h2>
            <p id="name">by Sender Name</p>
          </div>
        </div>
      </button>
    </div>
  </div>
  );
}

export default Message;
