import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import React from 'react';

const mentors = [
    {
        mentorName: "John Smith",
        email: "abc@example.com",
        phoneNumber: "0123456789"
    }, 
    {
        mentorName: "James Walsh",
        email: "cde@example.com",
        phoneNumber: "3337375466"
    },
    {
        mentorName: "ABCDE AAA",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "A B",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "C D",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "E F",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "G H",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "I J",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "K L",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "X Y",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "T U",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    }
];

const columns = [{
    dataField: 'mentorName',
    text: 'Mentor Name',
    sort: true
}, {
    dataField: 'email',
    text: 'Email',
    sort: true
}, {
    dataField: 'phoneNumber',
    text: 'Phone No.',
    sort: true
}];

const {SearchBar} = Search;

const paginationOptions = {
    onSizePerPageChange: (sizePerPage: any, page: any) => {
        console.log('Size per page change.');
        console.log('Newest size per page: ' + sizePerPage);
        console.log('Newest page: ' + page);
    }, 
    onPageChange: (page: any, sizePerPage: any) => {
        console.log('Page change!');
        console.log('Newest size per page ' + sizePerPage);
        console.log('Newest page: ' + page);
    }
};


export default function MentorsList() {
    return (
      <div>
          <h2>Mentors List</h2>
          <ToolkitProvider
            keyField="mentorName"
            data={mentors}
            columns={columns}
            search 
        >
            {
                props => (
                    <React.Fragment>
                    <div>
                        <SearchBar { ...props.searchProps } />
                        <hr />
                        <BootstrapTable
                            bootstrap4
                            pagination={paginationFactory(paginationOptions)}
                            { ...props.baseProps }
                        />
                    </div>
                    </React.Fragment>
                )
            }
        </ToolkitProvider>
      </div>
    );
}