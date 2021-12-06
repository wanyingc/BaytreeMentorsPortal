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

const myMentees: DiscussionListObjectType[] = [
  {
    header: "Hello",
    firstName: "Mira",
    lastName: "Jane",
    message: "Hello World",
    postDate: "today"
  },
  {
    header: "Oliva",
    firstName: "Lane",
    lastName: "Jane",
    message: "Nice to Meet You",
    postDate: "today"
  },
  {
    header: "TinaHudson",
    firstName: "Tina",
    lastName: "Hudson",
    message: "Tina Tina Tina",
    postDate: "today"
  }
]

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
  const [discussions, setDiscussions] = useState<Object[]>([]);
//   const [loading, setLoading] = useState(true);
//   const history = useHistory();

//   useEffect(() => {
//     if(loading) {
//       getDiscussionList().then(res => {
//             setDiscussionData(res.data);        
//             setDiscussion(discussionData.result);
//         });
//     }

//     return () => { setLoading(false)};
// });


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
    <ListGroup id="message-list-group">
    {myMentees.map((discussion,index) => (
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
            <h2 id="time">{new Date().toLocaleDateString()}</h2>
            <p id="name">by {discussion.firstName} {discussion.lastName}</p>
          </div>
        </div>
      </ListGroup.Item>
    ))}
    </ListGroup>
    </div>
  </div>
  );
}

export default Message;
