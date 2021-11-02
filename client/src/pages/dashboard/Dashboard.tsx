import React from 'react';
import './Dashboard.css';
import DashboardAdmin from './DashboardAdmin';
import DashboardVolunteer from './DashboardVolunteer';

const userTypes = ["admin", "volunteer"];

export default function Dashboard() {
    
    const userType = userTypes[0];

    return (
        <div>
            {userType === "admin" ?<DashboardAdmin/> : <DashboardVolunteer/> }
        </div>
    )
}
