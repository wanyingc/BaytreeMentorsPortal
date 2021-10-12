import React from 'react';
import './Dashboard.css';
import DashboardAdmin from './DashboardAdmin';
import Dashboard_Volunteer from '../dashboard_volunteer/Dashboard_Volunteer';

const userTypes = ["admin", "volunteer"];

export default function Dashboard() {
    const userType = userTypes[0];
    return (
        <div>
            {userType === "admin" ?<DashboardAdmin/> : <Dashboard_Volunteer/> }
        </div>
    )
}
