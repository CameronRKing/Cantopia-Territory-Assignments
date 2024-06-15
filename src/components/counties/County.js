import React, { useContext } from 'react';
import { AppContextNew, salespersonColors } from '../../data/AppContext';
import './County.css';

function County({ d, countyName, onCountySelect }) {
  const currentContext = useContext(AppContextNew);

  const assignment = currentContext.countyAssignment[countyName];
  const idx = currentContext.salespeople.indexOf(assignment);
  const fillStyle = {
    fill: salespersonColors[idx + 1], // the first color in the array is the empty state
  };

  function handleClick() {
    if (currentContext.selectedSalesperson !== undefined) {
      onCountySelect(countyName);
    }
  }
  return (
    <svg>
      <path
        className='county'
        style={fillStyle}
        d={d}
        id={countyName}
        onClick={handleClick}
      >
        <title>{countyName}</title>
      </path>
    </svg>
  );
}

export default County;
