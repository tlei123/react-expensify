import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, altFilters } from '../fixtures/testFilters';

describe('ExpenseListFilters component', () => {
  let setFilterText, setFilterSortByDate, setFilterSortByAmount, setFilterStartDate, setFilterEndDate, wrapper;
  beforeEach(() => {
    setFilterText = jest.fn();
    setFilterSortByDate = jest.fn();
    setFilterSortByAmount = jest.fn();
    setFilterStartDate = jest.fn();
    setFilterEndDate = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={defaultFilters}
        setFilterText={setFilterText}
        setFilterSortByDate={setFilterSortByDate}
        setFilterSortByAmount={setFilterSortByAmount}
        setFilterStartDate={setFilterStartDate}
        setFilterEndDate={setFilterEndDate}
      />
    );
  });

  it('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render ExpenseListFilters with altered filters', () => {
    wrapper.setProps({
      filters: altFilters
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call setFilterText correctly on text-input-change', () => {
    const testText = 'e';

    wrapper.find('input[name="text"]').simulate('change', {
      target: {
         value: testText
      }
    });

    expect(setFilterText).toHaveBeenLastCalledWith(testText);
  });

  it('Should call setFilterSortByAmount correctly on sortby-input-change', () => {
    wrapper.setProps({
      filters: defaultFilters
    });

    wrapper.find('select[name="sortby"]').simulate('change', {
      target: {
        value: 'amount'
      }
    });

    expect(setFilterSortByAmount).toHaveBeenCalled();
  });

  it('Should call setFilterSoryByDate correctly on sortby-input-change', () => {
    wrapper.setProps({
      filters: altFilters
    });

    wrapper.find('select[name="sortby"]').simulate('change', {
      target: {
        value: 'date'
      }
    });

    expect(setFilterSortByDate).toHaveBeenCalled();
  });

  it('Should handle date changes', () => {
    wrapper.setProps({
      filters: defaultFilters
    });

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
      startDate: altFilters.startDate,
      endDate: altFilters.endDate
    });

    expect(setFilterStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setFilterEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
  });

  it('Should handle DateRangePicker focus-change', () => {
    const calendarFocusedVal = 'endDate';

    wrapper.setProps({
      filters: defaultFilters
    });

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocusedVal);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocusedVal);
  });
});
