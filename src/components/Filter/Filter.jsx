import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';

import { FilterWrapper } from './Filter.styled';
import { Label } from '../ContactForm/ContactForm.styled';
import { getFilter } from 'redux/filterSelectors';

const FilterInput = styled(DebounceInput)`
  min-width: 50%;
  width: 75%;
  border-radius: 8px;
  font-size: 12px;
  placeholder: grey;
  padding: 8px 12px;
  outline-color: yellow;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 12px 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding: 12px 16px;
    margin-left: 16px;
  }
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterWrapper>
      <Label>
        Find contact by name
        <FilterInput
          type="text"
          name="filter"
          placeholder="Enter contact to search"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          debounceTimeout={500}
        />
      </Label>
    </FilterWrapper>
  );
};