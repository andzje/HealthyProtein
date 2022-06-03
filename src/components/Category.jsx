import React from 'react';
import "./Category.css"
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <div className="list main-category-list">
        <NavLink className="capsule-tag" to={'/category/kyckling'}>
            <span>Kyckling</span>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/kött'}>
            <span>Kött</span>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/fisk'}>
            <span>Fisk</span>
        </NavLink>
        <NavLink className="capsule-tag" to={'/category/vegetariskt'}>
            <span>Vegetariskt</span>
        </NavLink>
    </div>
  )
}

export default Category