import React from 'react';
import ICard from '../../interfaces/ICard';
import IStatus from '../../interfaces/IStatus';
interface ColumnProps {
    status: IStatus;
    cards: ICard[];
    index: number;
}
declare const Column: React.FC<ColumnProps>;
export default Column;
