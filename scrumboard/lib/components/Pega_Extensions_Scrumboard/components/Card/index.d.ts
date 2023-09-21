import React from 'react';
import ICard from '../../interfaces/ICard';
interface CardProps {
    card: ICard;
    index: number;
}
declare const Card: React.FC<CardProps>;
export default Card;
