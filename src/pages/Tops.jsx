import { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context"; 
import "./bottoms.css";

function Tops({ addToCart }) {
  const [tops, setTops] = useState([]);
  const { buyProducts } = useContext(Context);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTops(data.tops));
  }, []);

  return (
    <section>
      <div className="main-content">
        <h1>TOPS</h1>
        <p>Here you can see all the tops available in our collection.</p>
      </div>

      <section className="productos-grid">
        {tops.map((top) => (
          <div key={top.id} className="producto-card">
            <img src={top.img} alt={top.name} />
            <h2>{top.name}</h2>
            <p>${top.price}</p>
            <button onClick={() => { addToCart(top); buyProducts(top); }}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Tops;
