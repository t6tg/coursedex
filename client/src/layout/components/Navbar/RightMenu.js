import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default RightMenu;
