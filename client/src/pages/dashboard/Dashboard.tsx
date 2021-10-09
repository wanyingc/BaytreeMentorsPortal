import React from 'react'
import DashboardListBlock from '../../components/DashboardListBlock'
import { Users } from './DashboardData'

export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

const table_header = [ "Name", "Last Session", "Attendence"]

export default function Dashboard() {

    const renderBody = Users.map((row) => {
        return(
            <tr>
                <td>{row.name}</td>
                <td>{row.attendence}</td>
                <td>{row.lastSession}</td>
            </tr>
        );
    })

    return (
        <div>
            <DashboardListBlock
                title="Volunteers"
                theaders={table_header}
                childComp={renderBody}
            />
        </div>
    )
}
