import { useEffect, useState } from "react";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://tomat-pqblx.ondigitalocean.app/recipes`);
        const data = await api.json();
        setPopular(data)
    }

  return (
    <div>
        
        {popular.map((recipe) => {
            return (
                <div key={recipe._id}>
                    <p>{recipe.title}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Popular