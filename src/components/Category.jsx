import React from 'react';
import "./Category.css"
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className="list">
        <NavLink className="link" to={'/categories/kyckling'}>
            <h4>Kyckling</h4>
        </NavLink>
        <NavLink className="link" to={'/categories/kött'}>
            <h4>Kött</h4>
        </NavLink>
        <NavLink className="link" to={'/categories/fisk'}>
            <h4>Fisk</h4>
        </NavLink>
        <NavLink className="link" to={'/categories/vegetariskt'}>
            <h4>Vegetariskt</h4>
        </NavLink>
    </div>
  )
}

export default Category