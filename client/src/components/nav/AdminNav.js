import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-items">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/admin/product" className="nav-link">
            Product
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/admin/products" className="nav-link">
            Products
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/admin/category" className="nav-link">
            Category
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/admin/sub" className="nav-link">
            {" "}
            Sub Category
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/admin/coupon" className="nav-link">
            {" "}
            Coupon
          </Link>
        </li>

        <li className="nav-items">
          <Link to="/user/password" className="nav-link">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
