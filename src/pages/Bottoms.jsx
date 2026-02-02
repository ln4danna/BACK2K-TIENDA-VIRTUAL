import { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context"; 
import "./bottoms.css";


function Bottoms({ addToCart }) {
  const [bottoms, setBottoms] = useState([]);
  const { buyProducts } = useContext(Context);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setBottoms(data.bottoms));
  }, []);


  return (
    <section>
      <div className="main-content">
        <h1>BOTTOMS</h1>
        <p>Here you can see all the bottoms available in our collection.</p>
      </div>

      <section className="productos-grid">
        {bottoms.map((bottom) => (
          <div key={bottom.id} className="producto-card">
            <img src={bottom.img} alt={bottom.name} />
            <h2>{bottom.name}</h2>
            <p>${bottom.price}</p>
            <button onClick={() => {addToCart(bottom); buyProducts(bottom);}}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Bottoms;
