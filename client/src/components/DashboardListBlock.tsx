import React, { FC } from 'react';
import { UserObject } from '../pages/dashboard/Dashboard';
import '../styles/DashboardListBlock.css';

type Props = {
    title: string,
    theaders: string[],
    childComp?: React.ReactNode;
};

const DashboardListBlock: FC<Props> = ({
    title,
    theaders,
    childComp
}) => {

    const renderHeaders = theaders.map((item) => {
        return(
            <th>{item}</th>
        );
    });

    return (
        <div className="card">
            <div className="card-header fs-5">
                {title}
            </div>
            <div className="">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {renderHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {childComp}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default DashboardListBlock;