import { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context"; 
import "./bottoms.css";

function Hoodies({ addToCart }) {
  const [hoodies, setHoodies] = useState([]);
  const { buyProducts } = useContext(Context);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setHoodies(data.hoodies));
  }, []);


  return (
    <section>
      <div className="main-content">
        <h1>HOODIES</h1>
        <p>Here you can see all the hoodies available in our collection.</p>
      </div>

      <section className="productos-grid">
        {hoodies.map((hoodie) => (
          <div key={hoodie.id} className="producto-card">
            <img src={hoodie.img} alt={hoodie.name} />
            <h2>{hoodie.name}</h2>
            <p>${hoodie.price}</p>
            <button onClick={() => { addToCart(hoodie); buyProducts(hoodie); }}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Hoodies;
