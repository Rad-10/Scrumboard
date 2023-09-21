import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { clearFilters, filterCards, setSearchText } from '../../store/slices/cards.slice';
import { Container } from './styles';

const SearchInput: React.FC = () => {
  const { searchText } = useAppSelector(state => state.cards);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchText.length === 0) {
      dispatch(clearFilters());
      return;
    } else {
      dispatch(filterCards({}));
    }
  }, [searchText]);

  return (
    <Container>
      <input
        type='search'
        placeholder='Search for cards titles...'
        value={searchText}
        onChange={e => dispatch(setSearchText(e.target.value))}
      />
      <img src='' alt='Search icon' />
    </Container>
  );
};

export default SearchInput;
