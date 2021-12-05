import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import'../records/Records.css';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { getAccessToken} from "../../auth/Authenticator";
import { useParams } from "react-router-dom";
import RecordsBase from './RecordsBase';

const RecordsComponent = () => {
  const { personID } = useParams<any>();

  return (    
    <RecordsBase personID={personID} questionnaireTitle = {"Mentor's Questionnaire Details"} sessionsTitle={"Mentor's Session Details"} />  
  );
}
export default RecordsComponent;

