import React, { FC } from 'react';
import '../styles/DashboardListBlock.css';

type Props = {
    HeaderComp?: React.ReactNode;
    theaders?: string[];
    heightCSSClass?: string;
};

const DashboardListBlock: FC<Props> = ({
    HeaderComp,
    theaders,
    heightCSSClass,
    children
}) => {

    const renderHeaders = theaders ? 
                            theaders.map((item) => {
                                return(
                                    <th key={item}>{item}</th>
                                );
                            }) 
                            :
                            null;

    return (
        <div className={`card ${heightCSSClass} px-0 d-card`}>
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