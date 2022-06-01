import React from 'react';
import "./Category.css"
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className="list">
        <NavLink className="capsule-tag" to={'/category/kyckling'}>
            <h4>Kyckling</h4>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/kött'}>
            <h4>Kött</h4>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/fisk'}>
            <h4>Fisk</h4>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/vegetariskt'}>
            <h4>Vegetariskt</h4>
        </NavLink>
    </div>
  )
}

export default Category