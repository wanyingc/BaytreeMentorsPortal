import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const QuestionnaireAdmin = () => {

    return (
        <div id="boxes">
            <h5>Questionnaires</h5>
            <hr/>
            <Table responsive hover>
                <tbody>
                    <tr>
                    <td>Questionnaire Template #1</td>
                    <td><Button variant="primary" >View</Button></td>
                    <td><Button variant="success" >Send</Button></td>

                    </tr>
                    <tr>
                    <td>Volunteer Questionnaire 5</td>
                    <td><Button variant="primary" >View</Button></td>
                    <td><Button variant="success" >Send</Button></td>

                    </tr>
                    <tr>
                    <td>Demo Questionnaire 2</td>
                    <td><Button variant="primary" >View</Button></td>
                    <td><Button variant="success" >Send</Button></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default QuestionnaireAdmin