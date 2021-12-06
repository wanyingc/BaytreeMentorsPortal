import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import './Resources.css';

//import { Document, Page } from 'react-pdf';

// using CommonJS modules
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

import { pdfjs } from 'react-pdf';

// PDF files must be imported like this to work.
//todo: figure out how to import them dynamically
import file1 from './Test.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

function MyApp() {

    const [m1Show, setM1Show] = useState(false)
    const [m2Show, setM2Show] = useState(false)
    const [m3Show, setM3Show] = useState(false)

  return (
      
        <div id="boxes">
            <h1 id="title">Resources</h1>
            <hr id="line" />
            <Button 
                className="mb-3 fs-1" 
                variant="primary" 
                onClick={() => window.open("https://thebaytreecentre.sharepoint.com/:f:/g/Ej7DxK0KjzNBuTwQ_lU-0bMBdMNHOWzHi2bzGJB86G4Bjg")} 
                >
                Click To Access Sharepoint
            </Button>
            <br/>
        </div>

  );
}

export default MyApp;
