import { CgLogOut } from 'react-icons/cg';
import { IoPersonOutline } from 'react-icons/io5';
import { FiBarChart2, FiBriefcase } from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const volunteerItems1 = [
    {
        to: "/search",
        icon: <BsIcons.BsSearch className="nav-icon"/>
    },
    {
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        to: "/create-session",
        icon: <BsIcons.BsCalendar2Check className="nav-icon"/>
    },
    {
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        to: "/questionnaire",
        icon: <FiBriefcase className="nav-icon"/>
    },
    {
        to: "/report",
        icon: <FiBarChart2 className="nav-icon"/>
    },
    {
        to: "/notifications",
        icon: <BsIcons.BsBell className="nav-icon"/>
    },
];
export const volunteerItems2 = [
    {
        to: "/profile",
        icon: <IoPersonOutline className="nav-icon"/>
    },
    {
        to: "/settings",
        icon: <BsIcons.BsGear className="nav-icon"/>
    },
    {
        to: "/logout",
        icon: <CgLogOut className="nav-icon"/>
    },
];
export const adminItems1 = [
    {
        to: "/search",
        icon: <BsIcons.BsSearch className="nav-icon"/>
    },
    {
        to: "/dashboard",
        icon: <BsIcons.BsHouseDoor className="nav-icon"/>
    },
    {
        to: "/messages",
        icon: <BsIcons.BsChatLeft className="nav-icon"/>
    },
    {
        to: "/notifications",
        icon: <BsIcons.BsBell className="nav-icon"/>
    },
    {
        to:"/mentors-list",
        icon: <BsIcons.BsPeople className="nav-icon"/>
    },
];
export const adminItems2 = [
    {
        to: "/profile",
        icon: <IoPersonOutline className="nav-icon"/>
    },
    {
        to: "/settings",
        icon: <BsIcons.BsGear className="nav-icon"/>
    },
    {
        to: "/logout",
        icon: <CgLogOut className="nav-icon"/>
    },
];
