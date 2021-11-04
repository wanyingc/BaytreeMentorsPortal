import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import React, { useEffect, useState } from 'react';
import getMentorList from './mentor-list-data';

const columns = [
    {
        dataField: 'personID',
        text: 'Person ID',
        sort: true
    }, {
        dataField: 'firstName',
        text: 'First Name',
        sort: true
    }, {
        dataField: 'lastName',
        text: 'Last Name',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    }, {
        dataField: 'phone',
        text: 'Phone No.',
        sort: true
    }, {
        dataField: 'startDate',
        text: 'Start Date',
        sort: true
    }
];

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

type mentorDataType = {
    result: mentorListObjectType[];
}

type mentorListObjectType = {
    personID:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:number|string;
    startDate:Date|string;
}

let sampleMentors: mentorListObjectType[] = [
    {
        personID: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        startDate: ""
    }
];
const MentorsList = () => {
    const [mentorData, setMentorData] = useState<mentorDataType>({ result: sampleMentors});
    const [mentors, setMentors] = useState<Object[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(loading) {
            getMentorList().then(res => {
                setMentorData(res.data);        
                setMentors(mentorData.result);
            });
        }

        return () => { setLoading(false)};
    });
    return (
      <div className="container">
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

export default MentorsList;