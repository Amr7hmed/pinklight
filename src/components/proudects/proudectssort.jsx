/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SortIcon from "../../images/icon/apps-sort_icon.png";

function ProudectsSort() {
  return (
    <div className="dropdown">
      <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        ترتيب
        <img src={SortIcon} alt="Sort Icon" />
      </a>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li className="dropdown-item">
          من الأقل الى الأعلى سعرا
        </li>
        <li className="dropdown-item">
          من الأعلى الى الأقل سعرا
        </li>
      </ul>
    </div>
  )
}

export default ProudectsSort;