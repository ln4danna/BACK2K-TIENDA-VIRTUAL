import { Link } from "react-router-dom";

function Interest() {
  return (
    <section className="interest">
      <div className="interest-img1">
        <button>
          <Link to="/bottoms">JEANS</Link>
        </button>
      </div>

      <div className="interest-img2">
        <button>
          <Link to="/hoodies">HOODIES</Link>
        </button>
      </div>

      <div className="interest-img3">
        <button>
          <Link to="/tops">TOPS</Link>
        </button>
      </div>

      <div className="interest-img4">
        <button>
          <Link to="/bottoms">PANTS</Link>
        </button>
      </div>
    </section>
  );
}

export default Interest;
