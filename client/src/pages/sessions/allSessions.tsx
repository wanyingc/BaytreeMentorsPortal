import React,{useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import BootstrapTable from 'react-bootstrap-table-next';
import { render } from 'react-dom';
import './allSessions.css'



const secondNov = {
    Date: '02 / 11 / 2021',
    Time: '12:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const thirdNov = {
    Date: '03 / 11 / 2021',
    Time: '14:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const fourthNov = {
    Date: '04 / 11 / 2021',
    Time: '05:00',
    Duration: '01:00 (End Time 13:00)',
    Cancelled: 'No',
    Venue: 'Mars',
    Activity: 'Advocating on beneficiary behalf',
    Staff: 'Joanna Ten',

  };
  const sessionList=[secondNov,thirdNov,fourthNov];

     const columns = [
         {   dataField: 'Date',   text: 'Date' }, 
         {   dataField: 'Time',   text: 'Time' }, 
         {   dataField: 'Duration',   text: 'Duration' },
         {   dataField: 'Cancelled',   text: 'Cancelled' }, 
         {   dataField: 'Venue',   text: 'Venue' }, 
         {   dataField: 'Activity',   text: 'Activity' },
         {   dataField: 'Staff',   text: 'staff' },  ]; 

 const allSession = ()  => {
    
             return(
          <Form>
          <Container>
          <div className="Header">
          <div className="sessionsText">
              <text className="HeaderText">All Sessions</text>
              </div>
                <div className="App">
            <BootstrapTable keyField='id' data={ sessionList } columns={ columns }  />  </div>
         
          </div>
          </Container>
          </Form>
  );
             }          


  
  export default allSession;