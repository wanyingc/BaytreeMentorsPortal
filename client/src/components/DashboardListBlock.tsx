import React, { FC } from 'react';
import '../styles/DashboardListBlock.css';

type Props = {
    title: string
};

const DashboardListBlock: FC<Props> = ({
    title
}) => {
    return (
        <div className="dashblock">
            {title}
        </div>
    )
};

export default DashboardListBlock;