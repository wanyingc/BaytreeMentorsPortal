import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import React, { useEffect } from 'react';
import getMentorList from './mentor-list-data';

let mentors: any;

const columns = [{
    dataField: 'firstName',
    text: 'First Name',
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
    useEffect(() => {
        mentors = getMentorList();
    }, []);
    return (
      <div>
          <h2>Mentors List</h2>
          <ToolkitProvider
            keyField="firstName"
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