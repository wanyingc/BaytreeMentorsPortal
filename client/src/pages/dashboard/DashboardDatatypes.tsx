import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';

export const mentorTypes = [ "Mentors", "Youth Mentors", "Into School Mentors", "Women Mentors" ]

export const selectOptions = {
    0: "Youth Mentor",
    1: "Into School Mentor",
    2: "Women Mentor"
}

export const columnsDashboardTable = [ 
  {
      dataField: 'mentorName',
      text: 'Name',
      sort: true
  },
  {
      dataField: 'sessionDate',
      text: 'Session Date',
      sort: true
  },
  {
      dataField: 'mentorRole',
      text: 'Mentor Role',
      sort: true
  },
];
export const columnsMentees = [ 
  {
      dataField: 'name',
      text: 'Mentee Name'
  },
  {
      dataField: 'lastSession',
      text: 'Last Session'
  },
  {
      dataField: 'attendence',
      text: 'Attendance'
  },
];

export const columnsSessionsMentees = [
  {
      dataField: 'title',
      text: 'Session Name'
  }, 
  {
      dataField: 'person',
      text: 'Mentee Name'
  }, 
  {
      dataField: 'date',
      text: 'Date'
  }
];
export const columnsOverdueMentees = [
  {
      dataField: 'title',
      text: 'Item(s) Overdue'
  }, 
  {
      dataField: 'person',
      text: 'Mentee Name'
  }, 
  {
      dataField: 'date',
      text: 'Date'
  }
];