import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import'./HistoricRecords.css';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { getAccessToken, getPersonID} from "../../auth/Authenticator";
import RecordsBase from './HistoricRecordsBase';

const RecordsComponent = () => {

  const personID = getPersonID();

  return (    
    <RecordsBase personID={personID} questionnaireTitle = {"My Questionnaire Details"} sessionTitle={"My Session Details"}/>  
  );
}
export default RecordsComponent;

