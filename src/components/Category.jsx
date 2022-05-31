import "./Category.css"
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <div className="list">
        <NavLink>
            <h4>Kyckling</h4>
        </NavLink>
        <NavLink>
            <h4>Kött</h4>
        </NavLink>
        <NavLink>
            <h4>Fisk</h4>
        </NavLink>
        <NavLink>
            <h4>Vegetariskt</h4>
        </NavLink>
    </div>
  )
}

export default Category