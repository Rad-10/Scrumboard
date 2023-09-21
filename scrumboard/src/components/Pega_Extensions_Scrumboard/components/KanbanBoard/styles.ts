import styled from 'styled-components';
import { SCREEN_BREAKPOINTS } from '../../constants/breakpoints';

interface LabelContainerProps {
  color: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 0rem 0 0rem 0;
  position: left;

  @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    padding: 2rem 0 2rem 0;
  }
`;

export const SwitchIcon = styled.img`
  margin: 4px;
  height: 70%;
  width: 70%;
`;

export const StatusesColumnsContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: 1.5rem;
  width: 100%;
  overflow-x: auto;
`;

export const Header = styled.div`
  @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    padding: 0 2rem;
  }
`;
export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {

`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  padding-top: 1.5rem;
`;

export const LabelContainer = styled.div<LabelContainerProps>`
  padding: 5px;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;

  label {
    font-weight: bold;
    color: #fff;
    padding-left: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const SearchAndFilters = styled.div`
  width: auto;

  @media (max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    width: 100%;
  }
`;
