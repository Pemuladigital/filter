import React from 'react';
import "./FindScholarships.css";


function FindScholarships() {
  return (
    <>
      <div className="wrapper">
        <div className="TitleWrapper">
          <h1>Find Scholarships</h1>
        </div>

        <div className="Filter first">
          <p>Jenis Beasiswa</p>
          <label class="container">Beasiswa Pemerintah
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa Internasional
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa Penelitian
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa non-Akademik
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa Ikatan Dinas
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Pertukaran Pelajar
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="Filter second">
          <p>Pendidikan</p>
          <label class="container">SMP/SEDERAJAT
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">SMA/SEDERAJAT
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">S1
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">S2
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">D3/D4
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="Filter third">
          <p>Jenis Beasiswa</p>
          <label class="container">Beasiswa Pemerintah
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa Internasional
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa Penelitian
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Beasiswa non-Akademik
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container">Pertukaran Pelajar
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>
        
      </div>  
    </>
    
  )
}

export default FindScholarships;