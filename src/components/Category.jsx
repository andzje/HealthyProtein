import React from 'react';
import "./Category.css"
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className="list">
        <div>
            <h4>Kyckling</h4>
        </div>
        <div>
            <h4>Kött</h4>
        </div>
        <div>
            <h4>Fisk</h4>
        </div>
        <div>
            <h4>Vegetariskt</h4>
        </div>
    </div>
  )
}

export default Category