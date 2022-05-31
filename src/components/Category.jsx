import React from 'react';
import "./Category.css"
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className="list">
        <NavLink to={'/cuisine/Kyckling'}>
            <h4>Kyckling</h4>
        </NavLink>
        <NavLink to={'/cuisine/Kött'}>
            <h4>Kött</h4>
        </NavLink>
        <NavLink to={'/cuisine/Fisk'}>
            <h4>Fisk</h4>
        </NavLink>
        <NavLink to={'/cuisine/Vegetariskt'}>
            <h4>Vegetariskt</h4>
        </NavLink>
    </div>
  )
}

export default Category