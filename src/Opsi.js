import React from 'react';

function OpsiSatu() {
    const option = ["Beasiswa Pemerintah","Beasiswa Internasional",
    "Beasiswa Penelitian", "Beasiswa non-Akademik", "Beasiswa Ikatan Dinas",
    "Pertukaran Pelajar"]
    const optionList = option.map(option =>
        <label class="container">{option}
            <input type="checkbox"/>
            <span class="checkmark"></span>
         </label>)
    return <div>{optionList}</div>             
}
export default OpsiSatu
