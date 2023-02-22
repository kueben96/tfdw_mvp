import React from 'react';
import '../../resources/styles/dashboardfilter.css';

const FilterBarDonations = () => {
    return (
        <div className='filterbar'>
<div className='filter-up'>
<div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="split-btn1">SPENDEN</button>
  <button type="button" class="split-btn2">SUCHEN</button>
</div>
   <input type="search"
    placeholder=" Search"
    className="search"/>
             
</div>
<div className='filter-down'>
<select className='filters' >
<option value="" disabled selected>Kategorie</option>

</select>
<select className='filters'>
<option value="" disabled selected>Größe</option>
</select>
<select className='filters'>
<option value="" disabled selected>Farbe</option>
</select>
<input type="text"
    placeholder="PLZ"
    className="filters"/>
</div>

        </div>
    )
}

export default FilterBarDonations