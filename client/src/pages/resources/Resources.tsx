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
    <>
        <div className="container-fluid header-image-resources">
            <div className="container p-2">
                <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
                    <h5 className="page-title">Resources</h5>
                </div>    
            </div>
        </div>
        <div className="container">
            <div id="boxes">
                <Card>
                    <Card.Header>
                        Last updated: {new Date().toLocaleDateString()}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Resource1.pdf</Card.Title>
                        <Card.Subtitle>Optional description of documents contents</Card.Subtitle><br />
                        <Button variant="primary" onClick={() => setM1Show(true)} >View</Button>{' '}
                        <Button variant="success">Download</Button>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Header>
                        Last updated: {new Date().toLocaleDateString()}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Training Document 1.pdf </Card.Title>
                        <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor nec ante aliquam cursus.</Card.Subtitle><br />
                        <Button variant="primary" onClick={() => setM2Show(true)} >View</Button>{' '}
                        <Button variant="success">Download</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header>
                        Last updated: {new Date().toLocaleDateString()}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Mentoring Information #2.pdf </Card.Title>
                        <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor nec ante aliquam cursus. 
                            Nullam eget orci a felis sollicitudin auctor. Suspendisse eu tempor erat. 
                            Nam accumsan, lacus ut blandit accumsan, erat nunc malesuada turpis, pellentesque facilisis sapien leo id eros. 
                            Vivamus dolor libero, imperdiet eget nibh at, volutpat faucibus risus.
                        </Card.Subtitle><br />
                        <Button variant="primary" onClick={() => setM3Show(true)} >View</Button>{' '}
                        <Button variant="success">Download</Button>
                    </Card.Body>
                </Card>
    
                <Modal show={m1Show} size="xl" centered onHide={() => setM1Show(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Resource1.pdf</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="modalDiv">
                        <Document file={file1} options={{workerSrc: "pdf.worker.js"}}>
                            <Page pageNumber={1} />
                            </Document>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal show={m2Show} size="lg" centered onHide={() => setM2Show(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Training Document 1.pdf </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div id="modalDiv">
                        <Document file={file1} options={{workerSrc: "pdf.worker.js"}}>
                            <Page pageNumber={1} />
                            </Document>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal show={m3Show} size="lg" centered onHide={() => setM3Show(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mentoring Information #2.pdf </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div id="modalDiv">
                        <Document file={file1} options={{workerSrc: "pdf.worker.js"}}>
                            <Page pageNumber={1} />
                            </Document>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </div>
    </>
  );
}

export default MyApp;
