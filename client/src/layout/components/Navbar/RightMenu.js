import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Link to="/signin">Signin</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/signup">Signup</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default RightMenu;
