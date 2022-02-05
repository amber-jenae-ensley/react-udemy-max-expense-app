import { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const selectYearHandler = (event) => {
    props.onSetFilteredYear(+event.target.value);
    props.onFilterExpensesByYear(+event.target.value);
  };

  const resetFilter = () => props.onSetFilteredYear(0);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue="0" onChange={selectYearHandler}>
          <option value="0" disabled>Select a Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
        <button onClick={resetFilter}>Reset</button>
    </div>
  );
}

export default ExpenseFilter;
