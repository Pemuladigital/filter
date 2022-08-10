import React from "react";
import "./Filter1.css";

function Filter1 () {
    return (
        <div className="filter1">
            <p>Jenis Beasiswa</p>
            <div className="checkbox1">
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
            </div>
        </div>
    )
}

export default Filter1;