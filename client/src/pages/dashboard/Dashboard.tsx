import React from 'react';
import './Dashboard.css';
import DashboardAdmin from './DashboardAdmin';
import DashboardVolunteer from './DashboardVolunteer';
import store from "../../store/reducers/store";
import { useState } from 'react';
import {isAdmin} from '../../auth/Authenticator'


export default function Dashboard() {

    return (
        <div>
            { isAdmin() ? <DashboardAdmin/> : <DashboardVolunteer/> }
        </div>
    )
}
