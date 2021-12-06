import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import'./HistoricRecords.css';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { getAccessToken} from "../../auth/Authenticator";
import { useParams } from "react-router-dom";
import RecordsBase from './HistoricRecordsBase';

const RecordsComponent = () => {
  const { personID } = useParams<any>();

  return (    
    <RecordsBase personID={personID} questionnaireTitle = {"Mentor's Questionnaire Details"} sessionTitle={"Mentor's Session Details"} />  
  );
}
export default RecordsComponent;

