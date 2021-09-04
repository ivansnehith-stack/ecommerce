import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => ({ ...state })); //we destructure the user and spread it and take only user
  //const user = useSelector((state) => state.user)

  const history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut(); //logout
    //we need to update redux as well
    dispatch({
      type: "LOGOUT",
      payload: null, //state to be null again after logout
    });

    history.push("/login");
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <span>
          <Menu.Item
            key="home"
            icon={<AppstoreOutlined />}
            className="me-auto p-2"
          >
            <Link to="/">Home</Link>
          </Menu.Item>
        </span>

        <Menu.Item
          key="shop"
          icon={<ShoppingOutlined />}
          className=" me-auto p-2"
        >
          <Link to="/shop">Shop</Link>
        </Menu.Item>

        <Menu.Item
          key="cart"
          icon={<ShoppingCartOutlined />}
          className=" me-auto p-2"
        >
          <Link to="/cart">
            <Badge count={cart.length} offset={[12, 0]}>
              Cart
            </Badge>
          </Link>
        </Menu.Item>

        {user && (
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title={user.email && user.email.split("@")[0]} //split returns array we use the first index of array for username
            className="p-2"
          >
            {user && user.role === "subscriber" && (
              <Menu.Item>
                <Link to="/user/history">Dashboard</Link>
              </Menu.Item>
            )}

            {user && user.role === "admin" && (
              <Menu.Item>
                <Link to="/admin/dashboard">Dashboard</Link>
              </Menu.Item>
            )}
            <Menu.Item
              icon={<LogoutOutlined />}
              className="p-2"
              onClick={logout}
            >
              Logout
            </Menu.Item>
          </SubMenu>
        )}

        {!user && (
          <Menu.Item key="login" icon={<UserOutlined />} className="p-2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}

        {!user && (
          <Menu.Item key="register" icon={<UserAddOutlined />} className="p-2">
            <Link to="/register">Register</Link>
          </Menu.Item>
        )}

        <Search />
      </Menu>
    </div>
  );
};

export default Header;
