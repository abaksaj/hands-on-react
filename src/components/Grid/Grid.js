import React from 'react';
import '../../components/Grid/Grid.scss';

const Grid = ({
    children
}) => {
    return (
        <div className="Grid">
            {children}
        </div>
    );
}

export default Grid;