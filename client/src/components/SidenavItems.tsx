import { CgLogOut } from 'react-icons/cg';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineFolderView } from "react-icons/ai";
import { FiBarChart2, FiBriefcase, FiGrid } from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const volunteerItems1 = [
    {
        title: 'Dashboard',
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        title: 'Create-Session',
        to: "/create-session",
        icon: <BsIcons.BsCalendar2Check className="nav-icon"/>
    },
    {
        title: 'Messages',
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        title: 'Questionnaire',
        to: "/questionnaire",
        icon: <FiBriefcase className="nav-icon"/>
    },
    {
        title: 'Sessions',
        to: "/sessions",
        icon: <FiBarChart2 className="nav-icon"/>
    },
    {
        title: 'Records',
        to: "/records",
        icon: <FiGrid className="nav-icon"/>
    },

    {
        title: 'Resources',
        to: "/resources",
        icon: <AiOutlineFolderView className="nav-icon"/>
    },
    {
        title: 'Profile',
        to: "/profile",
        icon: <IoPersonOutline className="nav-icon"/>
    },    
];

export const adminItems1 = [
    {
        title: 'Dashboard',
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        title: 'Messages',
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        title: 'Mentor-List',
        to:"/mentors-list",
        icon: <BsIcons.BsPeople className="nav-icon"/>
    },
    {
        title: 'SignUp',
        to: "/signup",
        icon: <BsIcons.BsPersonPlus className="nav-icon"/>
    },
    {

        title: 'Resources',
        to: "/resources",
        icon: <AiOutlineFolderView className="nav-icon"/>
    },
    {
        title: 'Questions',
        to: "/questions",
        icon: <AiOutlineFolderView className="nav-icon"/>
    },
];
