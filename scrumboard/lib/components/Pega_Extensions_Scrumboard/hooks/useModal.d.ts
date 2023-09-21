import React, { ReactNode } from 'react';
import ICard from '../interfaces/ICard';
interface ModalContextData {
    visible: boolean;
    toggleVisibility: (card: ICard | undefined) => void;
    selectedCard: ICard | undefined;
}
interface ModalProviderProps {
    children: ReactNode;
}
declare const ModalProvider: React.FC<ModalProviderProps>;
declare function useModal(): ModalContextData;
export { ModalProvider, useModal };
