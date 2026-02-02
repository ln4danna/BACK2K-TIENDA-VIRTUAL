import { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context"; 
import "./bottoms.css";

function New({ addToCart }) {
  const [New, setNew] = useState([]);
  const { buyProducts } = useContext(Context);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setNew(data.new));
  }, []);

  return (
    <section>
      <div className="main-content">
        <h1>NEW IN</h1>
        <p>Here you can see all the new items available in our collection.</p>
      </div>

      <section className="productos-grid">
        {New.map((item) => (
          <div key={item.id} className="producto-card">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => { addToCart(item); buyProducts(item); }}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default New;