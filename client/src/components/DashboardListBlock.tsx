import React, { FC } from 'react';
import '../styles/DashboardListBlock.css';

type Props = {
    HeaderComp?: React.ReactNode,
    theaders?: string[],
};

const DashboardListBlock: FC<Props> = ({
    HeaderComp,
    theaders,
    children
}) => {

    const renderHeaders = theaders ? 
                            theaders.map((item) => {
                                return(
                                    <th>{item}</th>
                                );
                            }) 
                            :
                            null;

    return (
        <div className="card h-100 px-0 d-card">
            {HeaderComp}
            <div className="">
                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            {renderHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default DashboardListBlock;