import React from 'react';

export default function Select({ options, onChange }) {

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      {options.map(({ label, value }) => {
        return (
          <option value={value} key={value}>{label}</option>
        )
      })}
    </select>
  );
}
