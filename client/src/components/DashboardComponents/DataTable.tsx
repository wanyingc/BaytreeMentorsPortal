//cite: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Table%20Search&selectedStory=Search%20Hooks&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import React, { FC } from 'react';

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

type tableDataProp = {
    data: any[];
    columns: {
        dataField: string;
        text: string;
        sort: boolean;
    }[];
}

const DataTable: FC<tableDataProp> = ({
    data,
    columns,
}) => {
    var options ={
        onClick: function(e: any, row: any, rowIndex: any){
            console.log(e, row, rowIndex);
        }
    }

    return (
        <div >
            <ToolkitProvider
                keyField={columns[0].dataField}
                data={data}
                columns={columns}
            >
            {
                props => (
                    <React.Fragment>
                        <div>
                            {
                                columns.length > 10 ?
                                    <BootstrapTable
                                        bootstrap4
                                        pagination={paginationFactory(paginationOptions)}
                                        rowEvents = {options}
                                        { ...props.baseProps }
                                        bordered={false}
                                    />
                                :
                                    <BootstrapTable
                                        bootstrap4
                                        rowEvents = {options}
                                        { ...props.baseProps }
                                        bordered={false}
                                    />
                            }
                        </div>
                    </React.Fragment>
                )
            }
        </ToolkitProvider>
      </div>
    );
}

export default DataTable;