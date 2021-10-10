import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Recommended({ recommendedItemIds }) {
  const [recommendedItems, setRecommendedItems] = useState([]);
  const ids = recommendedItemIds;

  useEffect(() => {
    setRecommendedItems(
      data.filter((item) => {
        if (ids.includes(item.id)) {
          return item;
        }
      })
    );
  }, [recommendedItemIds]);

  return (
    <section className="recommended">
      <h2>you may also like</h2>
      <div className="recommended-items">
        {recommendedItems.map((recommendedItem) => {
          const { img, name, id } = recommendedItem;

          return (
            <article key={id} className="item">
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
              <h3 className="name">{name}</h3>
              <button type="button" className="product-btn">
                <Link to={`/single-product/${id}`}>see product</Link>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Recommended;
