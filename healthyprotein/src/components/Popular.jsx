import { useEffect } from "react";

function Popular() {

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://tomat-pqblx.ondigitalocean.app/recipes`);
        const data = await api.json();
        console.log(data);
    }

  return (
    <div>Popular</div>
  )
}

export default Popular