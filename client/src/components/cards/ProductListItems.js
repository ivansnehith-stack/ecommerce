import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, shipping, color, brand, quantity, sold } =
    product;
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Price <span>$ {price}</span>
        </li>

        {category && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Category{" "}
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        )}

        {subs && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Sub Categories
            {subs.map((s) => (
              <Link key={s._id} to={`/sub/${s.slug}`}>
                {" "}
                {s.name}
              </Link>
            ))}
          </li>
        )}

        <li className="list-group-item d-flex justify-content-between align-items-center">
          Shipping <span>{shipping}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          color <span> {color}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Brand <span>{brand}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Available<span>{quantity}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Sold<span>{sold}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductListItems;
